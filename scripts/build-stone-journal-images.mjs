import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const names = ["stone-identification", "gemstone-report", "crystal-care", "rudraksha-basics", "before-you-buy"];
const inputs = process.argv.slice(2);
if (inputs.length !== names.length) throw new Error("Provide five generated image paths in article order");
const originalDir = path.resolve("../handoff/stone-journal-banner-sources");
const output = path.resolve("public/images/stone-journal");
await fs.mkdir(originalDir, { recursive: true });
await fs.mkdir(output, { recursive: true });
for (const [index, name] of names.entries()) {
  const original = path.join(originalDir, `${name}.png`);
  await fs.copyFile(inputs[index], original);
  for (const width of [640, 1280]) {
    const target = path.join(output, `${name}-${width}.webp`);
    await sharp(original).resize({ width, height: width * 9 / 16, fit: "cover" }).webp({ quality: 82 }).toFile(target);
    console.log(`${path.basename(target)}: ${(await fs.stat(target)).size} bytes`);
  }
}
