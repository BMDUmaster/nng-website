import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const parent = path.dirname(root);
const stage = fs.mkdtempSync(path.join(os.tmpdir(), "nng-next-build-"));
const output = path.join(root, "out");
let previousOutput = null;

function fail(message) {
  throw new Error(`Next export: ${message}`);
}

async function copyTree(source, destination) {
  const jobs = [];
  async function collect(from, to) {
    await fs.promises.mkdir(to, { recursive: true });
    for (const entry of await fs.promises.readdir(from, { withFileTypes: true })) {
      const item = path.join(from, entry.name);
      const target = path.join(to, entry.name);
      if (entry.isDirectory()) await collect(item, target);
      else if (entry.isFile()) jobs.push([item, target]);
      else fail(`unsupported source entry ${item}`);
    }
  }
  await collect(source, destination);
  // Concurrent copies hydrate cloud-backed source files into local /tmp,
  // instead of serializing each file-provider read during the Next build.
  for (let index = 0; index < jobs.length; index += 16) {
    await Promise.all(jobs.slice(index, index + 16).map(([from, to]) => fs.promises.copyFile(from, to)));
  }
}

try {
  if (process.env.NEXT_PUBLIC_SITE_URL === "https://nngarg.com" && process.env.SITE_INDEXABLE === "true" && process.env.NEXT_PUBLIC_WHATSAPP_NUMBER !== "919205511101") {
    fail("set NEXT_PUBLIC_WHATSAPP_NUMBER=919205511101 for the production export");
  }

  // Laravel's root app/ shadows Next's src/app/. Build from a minimal staged
  // root so neither application has to be moved or exposed during deployment.
  // Next generates next-env.d.ts during the build; fresh clones do not contain it.
  for (const name of ["package.json", "package-lock.json", "next.config.ts", "tsconfig.json", "postcss.config.mjs"]) {
    const source = path.join(root, name);
    if (!fs.existsSync(source)) fail(`required build input ${name} is missing`);
    await fs.promises.copyFile(source, path.join(stage, name));
  }
  await copyTree(path.join(root, "src"), path.join(stage, "src"));
  console.log("Next export: source staged locally");
  await fs.promises.mkdir(path.join(stage, "public"));
  for (const name of ["nng-logo-200.webp", "narayani-portrait-480.avif", "zodiac-chakra.png", "narayani-about-authentic.webp"]) {
    const source = path.join(root, "public", "images", name);
    if (!fs.existsSync(source) || fs.statSync(source).size === 0) fail(`critical image public/images/${name} is missing or empty`);
  }
  await copyTree(path.join(root, "public", "images"), path.join(stage, "public", "images"));
  console.log("Next export: public images staged locally");
  await copyTree(path.join(root, "public", "videos"), path.join(stage, "public", "videos"));
  console.log("Next export: public videos staged locally");

  // A local install avoids slow or unavailable cloud-backed node_modules.
  // npm uses its normal cache first and fails clearly if packages are absent.
  console.log("Next export: installing locked build dependencies in local staging");
  const install = spawnSync("npm", ["ci", "--no-audit", "--no-fund", "--prefer-offline"], {
    cwd: stage,
    env: process.env,
    stdio: "inherit",
  });
  if (install.error) throw install.error;
  if (install.status !== 0) fail(`staged npm ci failed with status ${install.status ?? "unknown"}; existing out/ is untouched`);

  const nextCli = path.join(stage, "node_modules", "next", "dist", "bin", "next");
  const result = spawnSync(process.execPath, [nextCli, "build", "--webpack"], {
    cwd: stage,
    env: { ...process.env, NEXT_EXPORT: "1" },
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) fail(`build failed with status ${result.status ?? "unknown"}; existing out/ is untouched`);

  const stagedOutput = path.join(stage, "out");
  for (const file of ["index.html", "about/index.html", "services/index.html", "hand-holding-program/index.html", "contact/index.html", "consultation/index.html", "robots.txt", "sitemap.xml", "icon.svg"]) {
    if (!fs.existsSync(path.join(stagedOutput, file))) fail(`staged export lacks ${file}; existing out/ is untouched`);
  }

  // Never merge a fresh export with stale files. Preserve the previous out/
  // under a unique sibling backup for recovery and rename the clean export in.
  if (fs.existsSync(output)) {
    previousOutput = fs.mkdtempSync(path.join(parent, ".nng-previous-out-"));
    fs.renameSync(output, path.join(previousOutput, "out"));
  }
  try {
    fs.renameSync(stagedOutput, output);
  } catch (error) {
    if (previousOutput && !fs.existsSync(output)) {
      fs.renameSync(path.join(previousOutput, "out"), output);
      fs.rmdirSync(previousOutput);
      previousOutput = null;
    }
    throw error;
  }
  console.log(`Next export: complete staged build published to out/${previousOutput ? `; previous export retained at ${previousOutput}/out` : ""}`);
} finally {
  // stage is exclusively ours and contains no user-managed files.
  fs.rmSync(stage, { recursive: true, force: true });
}
