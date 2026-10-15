// Checks one service-page content file against the rules in src/content/offerings/validate.ts, while it is
// being written:   node scripts/check-offering.mjs src/content/offerings/astrology-a.ts
// Node runs the .ts files directly (they import types only). Exit code 1 lists what to fix.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = process.argv.slice(2).find((arg) => !arg.startsWith("--"));
if (!file) {
  console.error("usage: node scripts/check-offering.mjs <content file>");
  process.exit(2);
}
const { validatePage, pagePath } = await import(pathToFileURL(path.join(root, "src/content/offerings/validate.ts")).href);
const taxonomy = await import(pathToFileURL(path.join(root, "src/content/offerings/taxonomy.ts")).href);
// While pages are being written, an icon id must be in the vocabulary (src/components/icons/vocab.tsv) or in a
// request file (src/components/icons/requests/*.tsv). With --drawn it must be a drawn icon (the registry).
const iconDir = path.join(root, "src/components/icons");
const readIds = (file) => (fs.existsSync(file) ? fs.readFileSync(file, "utf8").split("\n").map((line) => line.split(/[\t|]/)[0].trim()).filter((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) : []);
const vocabIds = new Set(readIds(path.join(iconDir, "vocab.tsv")));
const requestDir = path.join(iconDir, "requests");
if (fs.existsSync(requestDir)) for (const name of fs.readdirSync(requestDir)) if (name.endsWith(".tsv")) for (const id of readIds(path.join(requestDir, name))) vocabIds.add(id);
const drawn = process.argv.includes("--drawn");
const registryFile = path.join(iconDir, "registry.json");
const iconIds = drawn ? new Set(Object.keys(JSON.parse(fs.readFileSync(registryFile, "utf8")))) : vocabIds;
const routes = JSON.parse(fs.readFileSync(path.join(root, "src/content/routes.json"), "utf8"));
const routePaths = routes.map((route) => route.path);
const mod = await import(pathToFileURL(path.resolve(file)).href);
const pages = Object.values(mod).flat();
if (pages.length === 0) {
  console.error(`${file} exports no pages yet`);
  process.exit(1);
}
let problems = 0;
for (const page of pages) {
  const where = pagePath(page);
  if (!routePaths.includes(where)) {
    console.log(`${where}: not a route in src/content/routes.json`);
    problems += 1;
  }
  const words = JSON.stringify([page.lead, page.intro, page.sections, page.lookAt, page.bring, page.session ?? null, page.suits ?? null, page.faqs, page.catalogue ?? null])
    .replace(/"icons?":("[^"]*"|\[[^\]]*\]),?/g, " ")
    .replace(/"(type|text|title|heading|id|chip|items|term|q|a|head|rows|caption|source|name|other|tradition|summary|points|art|kind|cut|tint|mukhi|steps|bring|yes|no|blocks|icon|icons)":/g, " ")
    .split(/[^A-Za-z0-9\u2019']+/).filter(Boolean).length;
  const list = validatePage(page, routePaths, { iconIds, taxonomy });
  console.log(`${list.length ? "FIX " : "ok  "} ${where}  (about ${words} words)`);
  for (const line of list) console.log("     -", line);
  problems += list.length;
}
console.log(problems ? `\n${problems} problem(s).` : `\nAll ${pages.length} page(s) pass.`);
process.exit(problems ? 1 : 0);
