import path from 'node:path';
import sharp from 'sharp';

// Preserve the original photographs; only reduce their transfer and decode cost.
const root = path.resolve(import.meta.dirname, '..');
for (const name of ['astrology', 'numerology', 'vastu', 'mind-training']) {
  for (const width of [400, 800]) {
    await sharp(path.join(root, 'public/images', `service-${name}.jpg`))
      .resize({width, withoutEnlargement: true})
      .webp({quality: 82})
      .toFile(path.join(root, 'public/images', `service-${name}-${width}.webp`));
  }
  console.log(`service-${name}: responsive thumbnails built`);
}
