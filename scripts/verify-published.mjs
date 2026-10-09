import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'handoff/published-manifest.json'),'utf8'));
const base=path.join(root,manifest.root);
const seen=[];
async function walk(dir) {
  for(const item of await fs.readdir(dir,{withFileTypes:true})) {
    const file=path.join(dir,item.name);
    if(item.isDirectory()) await walk(file);
    else if(item.isFile()) seen.push(path.relative(base,file).split(path.sep).join('/'));
    else throw new Error(`Unexpected symlink or special file: ${file}`);
  }
}
await walk(base);
const expected=new Set(manifest.files.map(f=>f.path));
const extras=seen.filter(f=>!expected.has(f));
if(extras.length||seen.length!==manifest.files.length) throw new Error(`Snapshot inventory differs: ${seen.length} actual, ${manifest.files.length} expected, ${extras.length} unexpected`);
let bytes=0;
for(let offset=0;offset<manifest.files.length;offset+=16) {
  await Promise.all(manifest.files.slice(offset,offset+16).map(async item=>{
    const content=await fs.readFile(path.join(base,item.path));
    if(content.length!==item.bytes||crypto.createHash('sha256').update(content).digest('hex')!==item.sha256) throw new Error(`Snapshot file changed or incomplete: ${item.path}`);
    bytes+=content.length;
  }));
}
console.log(`PASS: all ${manifest.files.length} published files match SHA-256; ${bytes} bytes. Source commit ${manifest.sourceCommit}.`);
