import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const hubs = ['astrology', 'numerology', 'vastu', 'brain-training', 'stones-and-rudraksh'];
for (const hub of hubs) {
  const source = path.join(root, 'design/banners', `${hub}-editorial-source.png`);
  for (const width of [480, 768, 1200]) {
    const target = path.join(root, 'public/images/banners', `${hub}-${width}`);
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${target}.webp`);
    await sharp(source).resize({ width, withoutEnlargement: true }).avif({ quality: 52, effort: 5 }).toFile(`${target}.avif`);
  }
  console.log(`${hub}: six responsive assets built`);
}
