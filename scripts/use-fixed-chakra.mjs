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
    content = content.replaceAll("/images/zodiac-chakra.png", "/images/zodiac-chakra-fixed.svg");
    fs.writeFileSync(bladeFile, content);
    console.log(`Updated ${bladeFile} to use /images/zodiac-chakra-fixed.svg`);
  }
}
