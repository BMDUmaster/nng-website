import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// The Hostinger site serves Laravel views, not the Next.js development server.
// Run a fresh production `npm run export` first, then this script to publish that
// exact export into the Laravel checkout. Never read an existing Blade view here.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const viewsDir = path.join(root, "resources", "views");
const publicDir = path.join(root, "public");

const pages = [
  { name: "home", exportPath: "index.html", indexable: true },
  { name: "about", exportPath: "about/index.html", indexable: true },
  { name: "services", exportPath: "services/index.html", indexable: true },
  { name: "hand-holding-program", exportPath: "hand-holding-program/index.html", indexable: true },
  { name: "contact", exportPath: "contact/index.html", indexable: true },
  { name: "consultation", exportPath: "consultation/index.html", indexable: false },
];

function fail(message) {
  throw new Error(`Laravel export sync: ${message}`);
}

function walkFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walkFiles(full) : [full];
  });
}

function copyFile(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

// This command is for the real domain. Generic `npm run export` remains usable
// for previews, but preview HTML must never replace the Laravel production views.
if (process.env.NEXT_PUBLIC_SITE_URL !== "https://nngarg.com") {
  fail("set NEXT_PUBLIC_SITE_URL=https://nngarg.com for the production build and sync");
}
if (process.env.SITE_INDEXABLE !== "true") {
  fail("set SITE_INDEXABLE=true for the production build and sync");
}
if (process.env.NEXT_PUBLIC_BASE_PATH) {
  fail("NEXT_PUBLIC_BASE_PATH must be empty for the root domain");
}
if (process.env.NEXT_PUBLIC_PREVIEW_NOTE) {
  fail("NEXT_PUBLIC_PREVIEW_NOTE must be empty for production");
}
if (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER !== "919205511101") {
  fail("set NEXT_PUBLIC_WHATSAPP_NUMBER=919205511101 for the production build and sync");
}
if (!fs.existsSync(outDir) || !fs.statSync(outDir).isDirectory()) {
  fail("out/ is missing; run a successful `npm run export` first");
}

const allowedHtml = new Set([...pages.map((page) => page.exportPath), "404.html", "404/index.html", "_not-found.html", "_not-found/index.html"]);
const unexpectedHtml = walkFiles(outDir)
  .map((file) => path.relative(outDir, file).split(path.sep).join("/"))
  .filter((file) => file.endsWith(".html") && !allowedHtml.has(file));
if (unexpectedHtml.length) fail(`unmapped HTML routes: ${unexpectedHtml.join(", ")}`);
const payloadFiles = walkFiles(outDir).filter((file) => file.endsWith(".txt") && path.relative(outDir, file) !== "robots.txt");
const payloadPattern = /^((?:about|services|hand-holding-program|contact|consultation|_not-found)\/)?((?:__next[^/]*|index)\.txt)$/;
if (payloadFiles.length === 0) fail("no static route payloads found; client navigation would break");
for (const file of payloadFiles) {
  const relative = path.relative(outDir, file).split(path.sep).join("/");
  if (!payloadPattern.test(relative)) fail(`unmapped route payload out/${relative}`);
}

for (const required of ["_next", "robots.txt", "sitemap.xml", "icon.svg"]) {
  if (!fs.existsSync(path.join(outDir, required))) fail(`missing out/${required}; export is incomplete`);
}
for (const name of ["nng-logo-200.webp", "narayani-portrait-480.avif", "zodiac-chakra.png", "narayani-about-authentic.webp"]) {
  const file = path.join(outDir, "images", name);
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) fail(`out/images/${name} is missing or empty`);
}

const htmlByPage = new Map();
for (const page of pages) {
  const exportFile = path.join(outDir, page.exportPath);
  if (!fs.existsSync(exportFile)) fail(`missing out/${page.exportPath}; export is incomplete`);
  const html = fs.readFileSync(exportFile, "utf8");
  const headEnd = html.indexOf("</head>");
  if (!/^<!DOCTYPE html>/i.test(html) || headEnd < 0 || !html.includes("</body>") || !html.includes("</html>")) {
    fail(`out/${page.exportPath} is not a complete HTML document`);
  }
  if (/localhost(?::\d+)?/i.test(html)) fail(`out/${page.exportPath} contains a localhost URL`);
  if (html.includes("@endverbatim")) fail(`out/${page.exportPath} contains a Blade delimiter`);
  const head = html.slice(0, headEnd);
  if (!head.includes("https://nngarg.com")) fail(`out/${page.exportPath} lacks production-domain metadata`);
  if (!html.includes("919205511101")) fail(`out/${page.exportPath} lacks the approved WhatsApp number`);
  const robots = head.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] ?? "";
  if (page.indexable && /noindex/i.test(robots)) fail(`out/${page.exportPath} still has noindex`);
  if (!page.indexable && !/noindex/i.test(robots)) fail(`out/${page.exportPath} must remain noindex (ads-only page)`);

  for (const match of html.matchAll(/(?:src|href)="(\/(?:_next\/|images\/|icon\.svg)[^"]*)"/g)) {
    const assetPath = decodeURIComponent(match[1].split(/[?#]/)[0]);
    if (!fs.existsSync(path.join(outDir, assetPath.slice(1)))) {
      fail(`out/${page.exportPath} references missing ${assetPath}`);
    }
  }
  htmlByPage.set(page.name, html);
}

// Stage every view before touching any existing view. The @verbatim wrapper
// keeps Next's embedded React payload from being interpreted by Blade.
fs.mkdirSync(viewsDir, { recursive: true });
const staged = [];
const previous = new Map();
try {
  for (const page of pages) {
    const target = path.join(viewsDir, `${page.name}.blade.php`);
    const temporary = `${target}.nng-sync-${process.pid}`;
    previous.set(target, fs.existsSync(target) ? fs.readFileSync(target) : null);
    fs.writeFileSync(temporary, `@verbatim\n${htmlByPage.get(page.name)}\n@endverbatim\n`);
    staged.push({ target, temporary });
  }

  // Add new hashed assets before replacing HTML that refers to them. Retain
  // older hashes so visitors with a page already open do not lose its scripts.
  // Images are already authored in public/images and are only copied into out
  // by Next, so copying them back would overwrite identical source files.
  for (const file of walkFiles(path.join(outDir, "images"))) {
    const relative = path.relative(path.join(outDir, "images"), file);
    const source = path.join(publicDir, "images", relative);
    if (!fs.existsSync(source) || fs.statSync(source).size !== fs.statSync(file).size) {
      fail(`public/images/${relative} differs from the exported image; rebuild from current source`);
    }
  }
  const staticDirs = new Set(["_next"]);
  const generatedRootAssets = new Set(["robots.txt", "sitemap.xml", "icon.svg"]);
  for (const entry of fs.readdirSync(outDir, { withFileTypes: true })) {
    const source = path.join(outDir, entry.name);
    if (entry.isDirectory() && staticDirs.has(entry.name)) {
      fs.cpSync(source, path.join(publicDir, entry.name), { recursive: true, force: true });
    } else if (entry.isFile() && generatedRootAssets.has(entry.name)) {
      copyFile(source, path.join(publicDir, entry.name));
    }
  }

  // Next's client-side navigation can request route payloads. They live under
  // _rsc/ instead of physical /about/ directories, which would intercept
  // Laravel's /about page route. public/.htaccess maps those requests.
  for (const file of payloadFiles) {
    copyFile(file, path.join(publicDir, "_rsc", path.relative(outDir, file)));
  }

  for (const { target, temporary } of staged) fs.renameSync(temporary, target);
  console.log(`Laravel export sync: published ${pages.length} views, static assets, and ${payloadFiles.length} route payloads from out/`);
} catch (error) {
  // An asset-copy failure leaves old views untouched. If a view replacement
  // fails mid-batch, restore the previous set before rethrowing the error.
  for (const [target, oldContent] of previous) {
    if (oldContent === null) {
      if (fs.existsSync(target)) fs.unlinkSync(target);
    } else {
      fs.writeFileSync(target, oldContent);
    }
  }
  throw error;
} finally {
  for (const { temporary } of staged) {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}
