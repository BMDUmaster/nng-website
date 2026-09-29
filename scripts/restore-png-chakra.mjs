import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const viewsDir = path.join(root, "resources", "views");

const pages = ["home", "about", "services", "hand-holding-program", "contact", "consultation"];

for (const name of pages) {
  const bladeFile = path.join(viewsDir, `${name}.blade.php`);
  if (fs.existsSync(bladeFile)) {
    let content = fs.readFileSync(bladeFile, "utf8");
    // Restore zodiac-chakra.png
    content = content.replaceAll("/images/zodiac-chakra.svg", "/images/zodiac-chakra.png");
    fs.writeFileSync(bladeFile, content);
    console.log(`Restored zodiac-chakra.png in ${bladeFile}`);
  }
}
