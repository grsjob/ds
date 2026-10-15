// Reads canvas.fig extracted from a local .fig ZIP. Never modifies source data.
const fs = require('node:fs');
const zlib = require('node:zlib');
const kiwi = require('kiwi-schema');
const { decompress } = require('fzstd');
const b=fs.readFileSync(process.argv[2]);
if(b.subarray(0,8).toString()!=='fig-kiwi') throw new Error('Unsupported Figma file header');
let p=12;const chunks=[];
while(p+4<=b.length){const len=b.readUInt32LE(p);p+=4;if(p+len>b.length)throw new Error('Invalid chunk length');chunks.push(b.subarray(p,p+len));p+=len;}
const unpack=b=>b.readUInt32LE(0)===0xfd2fb528?decompress(b):zlib.inflateRawSync(b);
const compiled=kiwi.compileSchema(kiwi.decodeBinarySchema(unpack(chunks[0])));
const message=compiled.decodeMessage(unpack(chunks[1]));
const keep=new Set('guid parentIndex type name size transform fillPaints strokePaints strokeWeight strokeAlign cornerRadius rectangleCornerRadii visible opacity fontSize fontName lineHeight textData fillGeometry strokeGeometry effects stackMode stackSpacing stackHorizontalPadding stackVerticalPadding styleType symbolData clipsContent'.split(' '));
const data={nodeChanges:message.nodeChanges.map(n=>Object.fromEntries(Object.entries(n).filter(([k])=>keep.has(k)).map(([k,v])=>[k,k==='symbolData'?{symbolID:v.symbolID}:v]))),blobs:message.blobs.map(b=>({base64:Buffer.from(b.bytes).toString('base64')}))};
fs.writeFileSync(process.argv[3],JSON.stringify(data,(_k,v)=>typeof v==='bigint'?v.toString():v));
