import fs from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='/NNG_Codex_Build/preview-20261004-r1';
const env={...process.env,NEXT_PUBLIC_SITE_URL:`https://deoxysaryan.github.io${base}`,NEXT_PUBLIC_BASE_PATH:base,SITE_INDEXABLE:'false',NEXT_PUBLIC_WHATSAPP_NUMBER:'919205511101',NEXT_PUBLIC_PREVIEW_NOTE:''};
for(const task of ['export','build:landing']) {
  const run=spawnSync(process.platform==='win32'?'npm.cmd':'npm',['run',task],{cwd:root,env,stdio:'inherit'});
  if(run.error) throw run.error;
  if(run.status!==0) process.exit(run.status??1);
}
// Only generated dist-review/ is replaced. The preserved published/ snapshot is never touched.
const generated=path.join(root,'dist-review');
await fs.rm(generated,{recursive:true,force:true});
const destination=path.join(generated,base.slice(1));
await fs.mkdir(path.dirname(destination),{recursive:true});
await fs.cp(path.join(root,'out'),destination,{recursive:true});
await fs.cp(path.join(root,'landing-pages/dist/landing'),path.join(destination,'landing'),{recursive:true});
const check=spawnSync(process.execPath,['scripts/check-export.mjs'],{cwd:root,env,stdio:'inherit'});
if(check.status!==0) process.exit(check.status??1);
console.log('Review export assembled. Run npm run preview:rebuilt. Nothing has been deployed.');
