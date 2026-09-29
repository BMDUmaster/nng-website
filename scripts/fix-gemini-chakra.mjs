import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pngPath = path.join(root, "public", "images", "zodiac-chakra.png");
const basePath = path.join(root, "public", "images", "zodiac-chakra-base.png");

// Backup original PNG as base
if (!fs.existsSync(basePath) && fs.existsSync(pngPath)) {
  fs.copyFileSync(pngPath, basePath);
}

const base64Png = fs.readFileSync(basePath).toString("base64");
const dataUri = `data:image/png;base64,${base64Png}`;

// Create SVG wrapper with base64 embedded rich image + gold Gemini patch
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 630 630" width="100%" height="100%">
  <!-- Rich Golden Artwork Base Image -->
  <image href="${dataUri}" x="0" y="0" width="630" height="630"/>

  <!-- Golden Patch & Correct GEMINI Text Overlay -->
  <g transform="rotate(300 315 315)">
    <path d="M 260,65 A 255,255 0 0,1 370,65 L 360,92 A 228,228 0 0,0 270,92 Z" fill="#D9B76A" opacity="0.96"/>
    <text x="315" y="83" text-anchor="middle" font-family="'Cinzel', 'Marcellus', 'Outfit', 'Georgia', serif" font-weight="700" font-size="14.5" letter-spacing="3.2" fill="#3C183D">GEMINI</text>
  </g>
</svg>`;

const svgPath = path.join(root, "public", "images", "zodiac-chakra-fixed.svg");
fs.writeFileSync(svgPath, svgContent);
console.log(`Generated ${svgPath}`);
