import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Derivatives only: originals remain unchanged for the product detail galleries.
const root = path.resolve(import.meta.dirname, '..');
const catalogue = JSON.parse(await fs.readFile(path.join(root, 'src/content/shop/catalogue.json'), 'utf8'));
const products = Array.isArray(catalogue) ? catalogue : catalogue.products;
if (!Array.isArray(products)) throw new Error('Unknown catalogue format');
const images = [...new Set(products.map(p => p.images[0]))];
for (const image of images) {
  if (!image.startsWith('/images/shop/') || image.includes('..')) throw new Error(`Unsafe image path: ${image}`);
  const source = path.join(root, 'public', image);
  const sourceInfo = await fs.stat(source);
  for (const width of [320, 640]) {
    const target = source.replace(/\.[^.]+$/, `-card-${width}.webp`);
    const targetInfo = await fs.stat(target).catch(() => null);
    if (targetInfo && targetInfo.mtimeMs >= sourceInfo.mtimeMs) continue;
    await sharp(source).resize({width, height: width, fit: 'inside', withoutEnlargement: true})
      .webp({quality: 82}).toFile(target);
  }
}
console.log(`Responsive card derivatives checked for ${images.length} original photographs`);
