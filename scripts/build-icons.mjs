// Compiles the hand-drawn icon and hero sources into the registries the site renders.
//
//   node scripts/build-icons.mjs            compile and report
//   node scripts/build-icons.mjs --check    compile, report, exit 1 on any problem (used by the build)
//   node scripts/build-icons.mjs --src a.json [--src b.json] --out /tmp/a.compiled.json
//                                           compile only those sources into a scratch file (for drawing and previewing;
//                                           the site's registries are not touched)
//
// Sources
//   src/components/icons/src/*.json      icons on a 48 x 48 grid:   { "graha-sun": [ shape, shape, ... ], ... }
//   src/components/icons/heroes/*.json   scenes, 320 x 240 unless a "size" is given:
//                                        { "hero-marriage": { "size": [320, 240], "shapes": [ ... ] }, ... }
// Output
//   src/components/icons/registry.json   id -> [[kind, "path data"], ["t", kind, x, y, size, "text"], ...]
//   src/components/icons/heroes.json     id -> { w, h, p: [ same items ] }
//
// A shape is one of
//   { "d": "M4 4L20 20" }                 an SVG path
//   { "c": [cx, cy, r] }                  a circle
//   { "e": [cx, cy, rx, ry] }             an ellipse
//   { "r": [x, y, w, h, rx] }             a rectangle (rx optional)
//   { "l": [x1, y1, x2, y2] }             a line
//   { "p": [[x, y], [x, y], ...], "z": 1 }  a polyline, closed when "z" is 1
//   { "t": [x, y, "5", size] }            a numeral or letter, centred on x
// and takes an optional "k" (kind):
//   0 ink line (default)   1 accent line   2 ink fill   3 accent fill   4 soft accent fill   5 faint ink line
// Neighbouring shapes of one kind are merged into one path, so a drawing is a handful of elements.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "src/components/icons");
const check = process.argv.includes("--check");
const argValues = (flag) => process.argv.flatMap((arg, i) => (arg === flag && process.argv[i + 1] ? [process.argv[i + 1]] : []));
const onlySources = argValues("--src").map((file) => path.resolve(file));
const scratchOut = argValues("--out")[0] ? path.resolve(argValues("--out")[0]) : null;
const problems = [];
const warnings = [];

const round = (n) => Math.round(n * 100) / 100;
const num = (n) => String(round(n));
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Extent of a path (absolute and relative commands, arcs by their end points). Enough to catch a stray coordinate. */
function extent(d) {
  const tokens = d.match(/[MmLlHhVvCcSsQqTtAaZz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? [];
  let x = 0, y = 0, sx = 0, sy = 0, cmd = "";
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const see = (px, py) => {
    minX = Math.min(minX, px); maxX = Math.max(maxX, px);
    minY = Math.min(minY, py); maxY = Math.max(maxY, py);
  };
  let i = 0;
  const next = () => Number(tokens[i++]);
  while (i < tokens.length) {
    if (/[A-Za-z]/.test(tokens[i])) cmd = tokens[i++];
    const rel = cmd === cmd.toLowerCase();
    const up = cmd.toUpperCase();
    if (up === "Z") { x = sx; y = sy; continue; }
    if (up === "M" || up === "L" || up === "T") {
      const nx = next(), ny = next();
      x = rel ? x + nx : nx; y = rel ? y + ny : ny;
      if (up === "M") { sx = x; sy = y; cmd = rel ? "l" : "L"; }
      see(x, y);
    } else if (up === "H") { const nx = next(); x = rel ? x + nx : nx; see(x, y); }
    else if (up === "V") { const ny = next(); y = rel ? y + ny : ny; see(x, y); }
    else if (up === "C") {
      const v = [next(), next(), next(), next(), next(), next()];
      for (let k = 0; k < 6; k += 2) see(rel ? x + v[k] : v[k], rel ? y + v[k + 1] : v[k + 1]);
      x = rel ? x + v[4] : v[4]; y = rel ? y + v[5] : v[5];
    } else if (up === "S" || up === "Q") {
      const v = [next(), next(), next(), next()];
      for (let k = 0; k < 4; k += 2) see(rel ? x + v[k] : v[k], rel ? y + v[k + 1] : v[k + 1]);
      x = rel ? x + v[2] : v[2]; y = rel ? y + v[3] : v[3];
    } else if (up === "A") {
      const rx = next(), ry = next(); next(); next(); next();
      const nx = next(), ny = next();
      x = rel ? x + nx : nx; y = rel ? y + ny : ny;
      see(x, y);
      void rx; void ry;
    } else { i++; }
  }
  return { minX, minY, maxX, maxY };
}

function toPath(shape, where) {
  const finite = (arr, n) => Array.isArray(arr) && arr.length >= n && arr.slice(0, n).every((v) => Number.isFinite(v));
  if (shape.d !== undefined) {
    if (typeof shape.d !== "string" || !/^[MmLlHhVvCcSsQqTtAaZz0-9\s.,+-eE]+$/.test(shape.d)) problems.push(`${where}: a path "d" has characters that are not path data`);
    return shape.d.trim().replace(/\s+/g, " ");
  }
  if (shape.c !== undefined) {
    if (!finite(shape.c, 3) || shape.c[2] <= 0) { problems.push(`${where}: a circle needs [cx, cy, r]`); return ""; }
    const [cx, cy, r] = shape.c;
    return `M${num(cx - r)} ${num(cy)}a${num(r)} ${num(r)} 0 1 0 ${num(2 * r)} 0a${num(r)} ${num(r)} 0 1 0 ${num(-2 * r)} 0z`;
  }
  if (shape.e !== undefined) {
    if (!finite(shape.e, 4) || shape.e[2] <= 0 || shape.e[3] <= 0) { problems.push(`${where}: an ellipse needs [cx, cy, rx, ry]`); return ""; }
    const [cx, cy, rx, ry] = shape.e;
    return `M${num(cx - rx)} ${num(cy)}a${num(rx)} ${num(ry)} 0 1 0 ${num(2 * rx)} 0a${num(rx)} ${num(ry)} 0 1 0 ${num(-2 * rx)} 0z`;
  }
  if (shape.r !== undefined) {
    if (!finite(shape.r, 4) || shape.r[2] <= 0 || shape.r[3] <= 0) { problems.push(`${where}: a rectangle needs [x, y, w, h]`); return ""; }
    const [x, y, w, h] = shape.r;
    const rx = Math.min(shape.r[4] ?? 0, w / 2, h / 2);
    if (!rx) return `M${num(x)} ${num(y)}h${num(w)}v${num(h)}h${num(-w)}z`;
    return `M${num(x + rx)} ${num(y)}h${num(w - 2 * rx)}a${num(rx)} ${num(rx)} 0 0 1 ${num(rx)} ${num(rx)}v${num(h - 2 * rx)}a${num(rx)} ${num(rx)} 0 0 1 ${num(-rx)} ${num(rx)}h${num(-(w - 2 * rx))}a${num(rx)} ${num(rx)} 0 0 1 ${num(-rx)} ${num(-rx)}v${num(-(h - 2 * rx))}a${num(rx)} ${num(rx)} 0 0 1 ${num(rx)} ${num(-rx)}z`;
  }
  if (shape.l !== undefined) {
    if (!finite(shape.l, 4)) { problems.push(`${where}: a line needs [x1, y1, x2, y2]`); return ""; }
    const [x1, y1, x2, y2] = shape.l;
    return `M${num(x1)} ${num(y1)}L${num(x2)} ${num(y2)}`;
  }
  if (shape.p !== undefined) {
    if (!Array.isArray(shape.p) || shape.p.length < 2 || !shape.p.every((pt) => finite(pt, 2))) { problems.push(`${where}: a polyline needs [[x, y], [x, y], ...]`); return ""; }
    return `M${shape.p.map(([x, y]) => `${num(x)} ${num(y)}`).join("L")}${shape.z ? "z" : ""}`;
  }
  problems.push(`${where}: a shape has none of d, c, e, r, l, p, t`);
  return "";
}

function compile(shapes, where, w, h, limit) {
  if (!Array.isArray(shapes) || shapes.length === 0) { problems.push(`${where}: no shapes`); return []; }
  if (shapes.length > limit) warnings.push(`${where}: ${shapes.length} shapes (more than ${limit}; simpler reads better)`);
  const out = [];
  let hasInk = false;
  for (const shape of shapes) {
    const kind = shape.k ?? 0;
    if (![0, 1, 2, 3, 4, 5].includes(kind)) { problems.push(`${where}: kind ${kind} is not 0 to 5`); continue; }
    if (kind === 0 || kind === 2) hasInk = true;
    if (shape.t !== undefined) {
      const [x, y, text, size] = shape.t;
      if (!Number.isFinite(x) || !Number.isFinite(y) || typeof text !== "string" || !text || text.length > 6) { problems.push(`${where}: text needs [x, y, "text", size] with at most six characters`); continue; }
      out.push(["t", kind, round(x), round(y), round(size ?? 14), text]);
      continue;
    }
    const d = toPath(shape, where);
    if (!d) continue;
    const e = extent(d);
    const slack = 1.5;
    if (e.minX < -slack || e.minY < -slack || e.maxX > w + slack || e.maxY > h + slack) problems.push(`${where}: a shape reaches (${round(e.minX)}, ${round(e.minY)}) to (${round(e.maxX)}, ${round(e.maxY)}), outside the ${w} x ${h} grid`);
    // Lines of one kind that sit in the same layer (no fill drawn between them) share one path, so an icon is two
    // or three elements, not eight. A fill keeps its place in the painting order.
    const isLine = kind === 0 || kind === 1 || kind === 5;
    let target = null;
    for (let i = out.length - 1; i >= 0; i -= 1) {
      const entry = out[i];
      if (entry[0] === "t") break;
      if (entry[0] === kind) { target = entry; break; }
      if (!isLine || !(entry[0] === 0 || entry[0] === 1 || entry[0] === 5)) break;
    }
    if (target && (isLine || target === out[out.length - 1])) target[1] += d;
    else out.push([kind, d]);
  }
  if (!hasInk && out.length) warnings.push(`${where}: no ink line or ink fill, only accent colour`);
  return out;
}

const readJson = (file) => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    problems.push(`${path.relative(root, file)}: ${error.message}`);
    return {};
  }
};

const registry = {};
const heroes = {};
const owner = {};
const sorted = (obj) => Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)));

/** One source file holds icons (id -> list of shapes) or heroes (id -> { size, shapes }); the shape of the value says which. */
function compileSource(file) {
  const name = path.basename(file);
  const data = readJson(file);
  for (const [id, value] of Object.entries(data)) {
    if (!ID.test(id)) { problems.push(`${name}: "${id}" is not a valid id`); continue; }
    if (Array.isArray(value)) {
      if (owner[id]) { problems.push(`${name}: "${id}" is also drawn in ${owner[id]}`); continue; }
      owner[id] = name;
      const items = compile(value, `icon ${id}`, 48, 48, 16);
      if (items.length) registry[id] = items;
    } else if (value && typeof value === "object") {
      if (heroes[id]) { problems.push(`${name}: "${id}" is drawn twice`); continue; }
      const [w, h] = value.size ?? [320, 240];
      const items = compile(value.shapes, `hero ${id}`, w, h, 60);
      if (items.length) heroes[id] = { w, h, p: items };
    } else {
      problems.push(`${name}: "${id}" is neither a list of shapes nor a hero`);
    }
  }
}

const report = () => {
  for (const line of warnings) console.log(`warn  ${line}`);
  for (const line of problems) console.log(`FIX   ${line}`);
};

if (onlySources.length) {
  for (const file of onlySources) compileSource(file);
  if (scratchOut) fs.writeFileSync(scratchOut, `${JSON.stringify({ icons: sorted(registry), heroes: sorted(heroes) })}\n`);
  console.log(`${Object.keys(registry).length} icons, ${Object.keys(heroes).length} heroes compiled${scratchOut ? ` into ${scratchOut}` : ""}`);
  report();
  process.exit(problems.length ? 1 : 0);
}

for (const sub of ["src", "heroes"]) {
  const folder = path.join(dir, sub);
  if (!fs.existsSync(folder)) continue;
  for (const name of fs.readdirSync(folder).sort()) if (name.endsWith(".json")) compileSource(path.join(folder, name));
}

fs.writeFileSync(path.join(dir, "registry.json"), `${JSON.stringify(sorted(registry))}\n`);
fs.writeFileSync(path.join(dir, "heroes.json"), `${JSON.stringify(sorted(heroes))}\n`);

const bytes = (file) => fs.statSync(path.join(dir, file)).size;
console.log(`${Object.keys(registry).length} icons (${(bytes("registry.json") / 1024).toFixed(1)} KB), ${Object.keys(heroes).length} heroes (${(bytes("heroes.json") / 1024).toFixed(1)} KB)`);
report();
if (problems.length && check) process.exit(1);
