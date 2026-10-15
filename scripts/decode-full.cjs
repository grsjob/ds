// Full scene data for TSX generation. Output is temporary and never shipped to consumers.
const fs=require('node:fs'),zlib=require('node:zlib'),kiwi=require('kiwi-schema'),{decompress}=require('fzstd');
const b=fs.readFileSync(process.argv[2]);if(b.subarray(0,8).toString()!=='fig-kiwi')throw new Error('Invalid Figma header');
let p=12;const cs=[];while(p+4<=b.length){const len=b.readUInt32LE(p);p+=4;if(p+len>b.length)throw new Error('Truncated chunk');cs.push(b.subarray(p,p+len));p+=len;}
const unpack=b=>b.readUInt32LE(0)===0xfd2fb528?decompress(b):zlib.inflateRawSync(b);
const data=kiwi.compileSchema(kiwi.decodeBinarySchema(unpack(cs[0]))).decodeMessage(unpack(cs[1]));
for(const node of data.nodeChanges){delete node.derivedTextData;delete node.exportSettings;delete node.editInfo;}
fs.writeFileSync(process.argv[3],JSON.stringify({nodes:data.nodeChanges,blobs:data.blobs.map(b=>Buffer.from(b.bytes).toString('base64'))},(_k,v)=>typeof v==='bigint'?String(v):v));
