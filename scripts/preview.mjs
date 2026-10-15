import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..',process.argv.includes('--rebuilt')?'dist-review':'published');
const port=Number(process.env.PORT)||3448;
const prefix='/NNG_Codex_Build/preview-20261004-r1/';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.mp4':'video/mp4','.webp':'image/webp','.avif':'image/avif','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2'};
http.createServer((req,res)=>{
  try {
    if(!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname==='/') {res.writeHead(302,{'Location':prefix});res.end();return;}
    let file=path.resolve(root,'.'+pathname);
    if(!file.startsWith(root+path.sep)) {res.writeHead(403);res.end();return;}
    if(fs.statSync(file).isDirectory()) {
      if(!pathname.endsWith('/')) {res.writeHead(302,{'Location':pathname+'/'});res.end();return;}
      file=path.join(file,'index.html');
    }
    const stat=fs.statSync(file);
    const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    let start=0,end=stat.size-1;
    if(range) {start=Number(range[1]);end=range[2]?Math.min(Number(range[2]),end):end;}
    if(start>end) {res.writeHead(416,{'Content-Range':`bytes */${stat.size}`});res.end();return;}
    const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Accept-Ranges':'bytes','Content-Length':end-start+1,'Cache-Control':'no-cache'};
    if(range) headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;
    res.writeHead(range?206:200,headers);
    if(req.method==='HEAD') {res.end();return;}
    const stream=fs.createReadStream(file,{start,end});
    res.on('close',()=>stream.destroy());stream.pipe(res);
  }catch {res.writeHead(404);res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`NNG ${process.argv.includes('--rebuilt')?'rebuilt':'exact published'} preview: http://127.0.0.1:${port}${prefix}`));
