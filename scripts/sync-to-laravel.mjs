// Builds the website for nngarg.com and copies it into the Laravel repository (BMDUmaster/nng-website, branch aditya).
//
//   node scripts/sync-to-laravel.mjs                      build, check and copy; nothing is committed
//   node scripts/sync-to-laravel.mjs -m "What changed"    the same, then commit in the Laravel repository
//   node scripts/sync-to-laravel.mjs --target D:/other    a different Laravel checkout (default D:/nng-website-push)
//
// Steps: build the five landing pages, export the Next site with the production settings, check the export, copy
// the tracked source files and the export into the Laravel checkout, then (with -m) commit there. Pushing stays a
// separate, manual step: cd /d/nng-website-push && git push
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const option = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const target = path.resolve(option("--target") ?? "D:/nng-website-push");
const message = option("-m");
const BRANCH = "aditya";

// Production settings. Set here, not on the shell, so Git Bash cannot turn /enquiry/store into a Windows path.
const PRODUCTION_ENV = {
  NEXT_EXPORT: "1",
  NEXT_PUBLIC_SITE_URL: "https://nngarg.com",
  SITE_INDEXABLE: "true",
  NEXT_PUBLIC_WHATSAPP_NUMBER: "919205511101",
  NEXT_PUBLIC_ENQUIRY_ENDPOINT: "/enquiry/store",
  NEXT_PUBLIC_BASE_PATH: "",
  NEXT_PUBLIC_PREVIEW_NOTE: "",
  ENQUIRY_BACKEND_URL: "",
};

// Source that belongs in the Laravel repository (only files tracked by Git are copied).
const SOURCE_DIRS = ["src", "scripts", "landing-pages"];
const SOURCE_FILES = ["package.json", "package-lock.json", "next.config.ts", "tsconfig.json", "postcss.config.mjs", "eslint.config.mjs"];
// Laravel-owned files in public/ that the copy must never replace.
const KEEP_IN_PUBLIC = new Set(["index.php", ".htaccess", "uploads"]);

const step = (text) => console.log(`\n== ${text}`);
function fail(text) { console.error(`\nStopped: ${text}`); process.exit(1); }
function run(cmd, cmdArgs, opts = {}) {
  const result = spawnSync(cmd, cmdArgs, { stdio: "inherit", shell: process.platform === "win32", ...opts });
  if (result.status !== 0) fail(`${cmd} ${cmdArgs.join(" ")} exited with ${result.status}`);
}
function git(cwd, gitArgs) {
  const result = spawnSync("git", gitArgs, { cwd, encoding: "utf8" });
  if (result.status !== 0) fail(`git ${gitArgs.join(" ")} in ${cwd}: ${result.stderr.trim()}`);
  return result.stdout;
}
function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}
function copyTree(from, to) {
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, entry.name), b = path.join(to, entry.name);
    if (entry.isDirectory()) copyTree(a, b);
    else copyFile(a, b);
  }
}

// 1. The Laravel checkout must be the right repository, on the right branch, with nothing half-done in it.
step(`Checking the Laravel checkout at ${target}`);
if (!fs.existsSync(path.join(target, "artisan"))) fail(`${target} is not the Laravel repository (no artisan file).`);
const branch = git(target, ["branch", "--show-current"]).trim();
if (branch !== BRANCH) fail(`${target} is on branch "${branch}"; switch it to "${BRANCH}" first.`);
const dirty = git(target, ["status", "--porcelain"]).trim();
if (dirty) fail(`${target} has uncommitted changes. Commit or discard them first:\n${dirty}`);
const uncommitted = git(root, ["status", "--porcelain", "--", ...SOURCE_DIRS, ...SOURCE_FILES, "public"]).trim();
if (uncommitted) console.log(`Note: uncommitted changes here will be included:\n${uncommitted}`);

// 2. Landing pages (generated into public/landing). The retired psychic-reader and vastu folders are removed.
step("Building the landing pages");
run("npm", ["run", "build:landing"], { cwd: root });
for (const dir of ["public/landing/psychic-reader", "public/landing/vastu", "landing-pages/dist/landing/psychic-reader", "landing-pages/dist/landing/vastu"]) {
  fs.rmSync(path.join(root, dir), { recursive: true, force: true });
}

// 3. The website export, with the production settings.
step("Exporting the website for nngarg.com");
const out = path.join(root, "out");
fs.rmSync(out, { recursive: true, force: true });
run("npx", ["next", "build"], { cwd: root, env: { ...process.env, ...PRODUCTION_ENV } });

// 4. Checks before anything is copied.
step("Checking the export");
for (const page of ["index.html", "contact/index.html", "about/index.html", "services/index.html", "landing/brainology/index.html", "404.html"]) {
  if (!fs.existsSync(path.join(out, page))) fail(`the export has no ${page}`);
}
const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
if (!home.includes("GTM-P3KXR4GL")) fail("Google Tag Manager is missing from the home page");
if (!home.includes("1412583603769916")) fail("the Meta Pixel is missing from the home page");
if (home.includes('content="noindex')) fail("the home page is set to noindex");
if (home.includes("localhost")) fail("the home page refers to localhost");
const chunks = path.join(out, "_next", "static", "chunks");
const js = fs.readdirSync(chunks).filter((f) => f.endsWith(".js")).map((f) => fs.readFileSync(path.join(chunks, f), "utf8")).join("\n");
if (!js.includes('"/enquiry/store"')) fail("the contact form is not pointed at /enquiry/store");
if (js.includes("Program Files/Git")) fail("a setting was turned into a Windows path by Git Bash");
const landing = fs.readFileSync(path.join(out, "landing/astrology/index.html"), "utf8");
if (landing.includes("1412583603769916")) fail("the Meta Pixel must not be on the landing pages");
console.log("Export checks passed.");

// 5. Copy into the Laravel checkout.
step("Copying into the Laravel checkout");
const tracked = git(root, ["ls-files", "-z", "--", ...SOURCE_DIRS, ...SOURCE_FILES, "public"]).split("\0").filter(Boolean);
for (const dir of SOURCE_DIRS) fs.rmSync(path.join(target, dir), { recursive: true, force: true });
let copied = 0;
for (const file of tracked) {
  const from = path.join(root, file);
  if (!fs.existsSync(from)) continue; // deleted here but not yet committed
  if (file.startsWith("public/") && KEEP_IN_PUBLIC.has(file.split("/")[1])) continue;
  copyFile(from, path.join(target, file));
  copied++;
}
// The export replaces the previous build's hashed assets, so old chunks do not pile up in the repository.
fs.rmSync(path.join(target, "public", "_next", "static"), { recursive: true, force: true });
for (const entry of fs.readdirSync(out, { withFileTypes: true })) {
  if (KEEP_IN_PUBLIC.has(entry.name)) continue;
  const from = path.join(out, entry.name), to = path.join(target, "public", entry.name);
  if (entry.isDirectory()) copyTree(from, to);
  else copyFile(from, to);
}
console.log(`Copied ${copied} source files and the export.`);

// 6. Summary, and the commit when a message was given.
const changes = git(target, ["status", "--porcelain"]).trim().split("\n").filter(Boolean);
step(`${changes.length} files changed in ${target}`);
if (!changes.length) { console.log("Nothing changed; nothing to commit."); process.exit(0); }
if (message) {
  git(target, ["add", "-A", "--", ...SOURCE_DIRS, ...SOURCE_FILES, "public"]);
  git(target, ["commit", "-q", "-m", `${message}\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`]);
  console.log(git(target, ["log", "--oneline", "-1"]).trim());
  console.log(`\nCommitted. Push it with:\n  cd ${target.replace(/\\/g, "/")} && git push`);
} else {
  console.log("Not committed (no -m message). Review with git status in the Laravel checkout.");
}
