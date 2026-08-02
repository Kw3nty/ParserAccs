#!/usr/bin/env node
const fs=require('fs'),path=require('path'),crypto=require('crypto'),zlib=require('zlib');
const cwd=process.cwd();
const BASE=(process.env.PA_BASE||'https://kw3nty.github.io/ParserAccs').replace(/\/$/,'');
const CHUNK=parseInt(process.env.PA_CHUNK||'6000',10);
const payloadPath=path.join(cwd,'payload.js');
if(!fs.existsSync(payloadPath)){console.error('payload.js not found in '+cwd);process.exit(1);}
let raw=fs.readFileSync(payloadPath,'utf8');
if(raw.startsWith('javascript:'))raw=raw.slice('javascript:'.length);   // можно кинуть букмарклет как есть
const sha=crypto.createHash('sha256').update(raw).digest('hex');
const ver=sha.slice(0,10);
const comp=zlib.gzipSync(Buffer.from(raw,'utf8'),{level:9});
const b64=comp.toString('base64');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ogDir=path.join(cwd,'og');
fs.rmSync(ogDir,{recursive:true,force:true});
const chunksDir=path.join(ogDir,'chunks','v'+ver);
fs.mkdirSync(chunksDir,{recursive:true});
function pageHtml(title,desc,selfUrl){
  return '<!doctype html><html><head><meta charset="utf-8">'+
    '<meta property="og:type" content="website">'+
    '<meta property="og:url" content="'+esc(selfUrl)+'">'+
    '<meta property="og:title" content="'+esc(title)+'">'+
    '<meta property="og:description" content="'+esc(desc)+'">'+
    '<meta name="robots" content="noindex"></head><body><p>ParserAccs OG chunk</p></body></html>';
}
const urls=[],lens=[];
const n=Math.max(1,Math.ceil(b64.length/CHUNK));
for(let i=0;i<n;i++){
  const part=b64.substr(i*CHUNK,CHUNK);
  const url=BASE+'/og/chunks/v'+ver+'/c'+String(i).padStart(4,'0')+'.html';
  urls.push(url);lens.push(part.length);
  fs.writeFileSync(path.join(chunksDir,'c'+String(i).padStart(4,'0')+'.html'),pageHtml(String(part.length),part,url));
}
const manifest={v:ver,sha:sha,n:n,chunk:CHUNK,urls:urls,lens:lens};
const manifestUrl=BASE+'/og/manifest.html';
fs.writeFileSync(path.join(ogDir,'manifest.html'),pageHtml('ParserAccs manifest v'+ver,JSON.stringify(manifest),manifestUrl));
console.log('packed: payload '+raw.length+'B -> gzip '+comp.length+'B -> b64 '+b64.length+' -> '+n+' chunks (CHUNK='+CHUNK+')');
console.log('version='+ver+'  sha='+sha);
console.log('manifest='+manifestUrl);
console.log('wrote ./og/  ->  commit & push  (GitHub Pages: branch=main, folder=/(root))');
