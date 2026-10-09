import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ignored=new Set(['.git','node_modules','.next','out','dist-review','qa-local']);
const extensions=new Set(['.ts','.tsx','.js','.mjs','.css','.json','.html','.txt','.md','.xml','.svg','.example']);
const rules=[
  ['private key',/-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ['GitHub token',/\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/],
  ['AWS access key',/\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ['Google API key',/\bAIza[0-9A-Za-z_-]{35}\b/],
  ['OpenAI secret',/\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{40,}\b/],
  ['Slack token',/\bxox[baprs]-[A-Za-z0-9-]{20,}\b/],
  ['credential in URL',/https?:\/\/[^\s/"<>:@]+:[^\s/"<>@]+@/],
  ['Laravel app key',/APP_KEY\s*=\s*base64:[A-Za-z0-9+/=]+/],
];
const findings=[];
let files=0,bytes=0;
async function walk(dir) {
  for(const entry of await fs.readdir(dir,{withFileTypes:true})) {
    if(ignored.has(entry.name)||(dir===path.join(root,'landing-pages')&&entry.name==='dist')) continue;
    const file=path.join(dir,entry.name),relative=path.relative(root,file);
    if(entry.isDirectory()) {await walk(file);continue;}
    if(!entry.isFile()) {findings.push({path:relative,rule:'unexpected symlink or special file'});continue;}
    const stat=await fs.stat(file);files++;bytes+=stat.size;
    if(stat.size>=100_000_000) findings.push({path:relative,rule:'GitHub per-file size limit'});
    if(/(?:^|\/)(?:\.env(?:\..*)?|.*\.private\..*|.*\.(?:pem|key))$/.test(relative)&&entry.name!=='.env.example') findings.push({path:relative,rule:'private-file name'});
    if(extensions.has(path.extname(file))||entry.name==='.env.example') {
      const content=await fs.readFile(file,'utf8');
      for(const [rule,re] of rules) if(re.test(content)) findings.push({path:relative,rule});
    }
  }
}
await walk(root);
if(findings.length) {console.log(JSON.stringify({files,findings},null,2));process.exit(1);}
console.log(`PASS: ${files} proposed handoff files (${bytes} bytes); no configured credential/private-file patterns or GitHub size-limit violations detected.`);
