import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const routes=JSON.parse(await fs.readFile(path.join(root,'src/content/routes.json'),'utf8'));
const out=path.join(root,'dist-review/NNG_Codex_Build/preview-20261004-r1');
const files=[...routes.map(r=>r.path==='/'?'index.html':`${r.path.replace(/^\//,'')}index.html`),'robots.txt','sitemap.xml','icon.svg',...['psychic-reader','astrology','numerology','vastu','hand-holding'].map(s=>`landing/${s}/index.html`)];
const problems=[];
for(const file of files) {
  try {if(!(await fs.stat(path.join(out,file))).size) problems.push(`${file}: empty`);}
  catch {problems.push(`${file}: missing`);}
}
if(problems.length) throw new Error(problems.join('\n'));
console.log(`PASS: ${routes.length} route-manifest pages, all five landing pages and required metadata are present in the combined export.`);
