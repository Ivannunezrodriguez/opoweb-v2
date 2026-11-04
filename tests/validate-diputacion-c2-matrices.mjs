import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const base='content/diputacion-toledo-auxiliar-c2/tema-';
const programme=read('data/programa-diputacion-auxiliar-c2-2026.json');
const covered=[2,3,4,8,13];
let checked=0;
for(const n of covered){
 const topic=programme.temas.find(t=>t.numero===n);
 assert(topic,'Missing official topic '+n);
 const file=base+String(n).padStart(2,'0')+'/matriz.json';
 assert.equal(topic.matriz,file,'Manifest must route to the actual matrix');
 const map=read(file);
 assert.equal(map.epigrafeOficial,topic.titulo,'Official wording must be exact: '+n);
 assert.equal(map.tema,n);
 assert.ok(map.estadoControl?.includes('PENDIENTE_COTEJO_INTEGRAL'),'Never overclaim certification');
 assert.ok(map.cobertura.length>=5,'Coverage rows missing: '+n);
 for(const part of map.cobertura){
  for(const field of ['inciso','norma','articulos','contenidoExigible']){
   assert.equal(typeof part[field],'string','Missing '+field+' in topic '+n);
   assert.ok(part[field].trim().length>3,'Empty '+field+' in topic '+n);
  }
 }
 checked++;
}
assert.equal(checked,5);
console.log('DIPUTACION_C2_5_OFFICIAL_SOURCE_MATRICES_PRESENT_AND_PENDING_LEGAL_REVIEW_OK');
