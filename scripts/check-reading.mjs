import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { readingParts } from '../src/content/offerings/reading.ts';

const folder = path.resolve(import.meta.dirname, '../src/content/offerings/pages');
const words = block => {
  if (block.type === 'p' || block.type === 'note' || block.type === 'quote') return block.text.split(/\s+/);
  return JSON.stringify(block).split(/\s+/);
};
let pages = 0, sections = 0, disclosures = 0, fullWords = 0, visibleWords = 0;
for (const file of fs.readdirSync(folder).filter(name => name.endsWith('.ts') && name !== 'index.ts')) {
  const { page } = await import(pathToFileURL(path.join(folder, file)).href);
  pages++;
  for (const section of page.sections) {
    sections++;
    const parts = readingParts(section.blocks);
    const original = section.blocks.flatMap(words);
    const output = parts ? [...parts.visible, ...parts.detail].flatMap(words) : original;
    // Sorting allows visible caution/quote blocks to move ahead of reference detail.
    assert.deepEqual([...output].sort(), [...original].sort(), `${file}: ${section.id} loses or duplicates text`);
    if (parts) {
      disclosures++;
      for (const block of section.blocks.filter(b => b.type === 'note' || b.type === 'quote')) {
        assert(parts.visible.includes(block), `${file}: ${section.id} hides a caution or quote`);
      }
      for (const block of [...parts.visible, ...parts.detail].filter(b => b.type === 'p')) {
        assert.equal((block.text.match(/\*/g)?.length ?? 0) % 2, 0, `${file}: split italic markup`);
      }
    }
    fullWords += original.length;
    visibleWords += parts ? parts.visible.flatMap(words).length : original.length;
  }
}
console.log(`Reading integrity: PASS ${pages} pages, ${sections} sections, ${disclosures} expandable explanations`);
console.log(`Default section text: ${visibleWords}/${fullWords} word tokens (${Math.round(100 * visibleWords / fullWords)}% visible); all authored section text retained`);
