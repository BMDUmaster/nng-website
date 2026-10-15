import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'handoff/published-manifest.json'),'utf8'));
const files=manifest.files.filter(f=>f.path.startsWith('landing/'));
for(const item of files) {
  const content=await fs.readFile(path.join(root,'landing-pages/dist',item.path));
  if(content.length!==item.bytes||crypto.createHash('sha256').update(content).digest('hex')!==item.sha256) throw new Error(`Generated landing file differs from published snapshot: ${item.path}`);
}
console.log(`PASS: all ${files.length} regenerated landing-page files match the published snapshot exactly.`);
