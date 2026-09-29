import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const viewsDir = path.join(root, "resources", "views");

if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir, { recursive: true });
}

// Remove any .blade.php files to avoid conflicts
const oldBladeFiles = fs.readdirSync(viewsDir).filter(f => f.endsWith(".blade.php"));
for (const f of oldBladeFiles) {
  fs.unlinkSync(path.join(viewsDir, f));
}

const map = [
  { htmlPath: path.join(outDir, "index.html"), viewName: "home.php" },
  { htmlPath: path.join(outDir, "about", "index.html"), viewName: "about.php" },
  { htmlPath: path.join(outDir, "services", "index.html"), viewName: "services.php" },
  { htmlPath: path.join(outDir, "hand-holding-program", "index.html"), viewName: "hand-holding-program.php" },
  { htmlPath: path.join(outDir, "contact", "index.html"), viewName: "contact.php" },
  { htmlPath: path.join(outDir, "consultation", "index.html"), viewName: "consultation.php" },
];

for (const item of map) {
  if (fs.existsSync(item.htmlPath)) {
    let content = fs.readFileSync(item.htmlPath, "utf8");
    const targetFile = path.join(viewsDir, item.viewName);
    fs.writeFileSync(targetFile, content);
    console.log(`Converted ${item.htmlPath} -> ${targetFile}`);
  } else {
    console.log(`Skipped (not found): ${item.htmlPath}`);
  }
}
