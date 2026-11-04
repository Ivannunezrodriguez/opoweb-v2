import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
// Q/A position bias check; no legal-certification claim.
let total=0;
for(let topic=1;topic<=20;topic++){
 const path='content/uc3m/tema-'+String(topic).padStart(2,'0')+'/preguntas.json';
 const bank=JSON.parse(readFileSync(path,'utf8'));
 const counts=[0,0,0,0],ids=new Set;
 for(const q of bank.preguntas){
  const key=q.correcta??q.respuestaCorrecta;
  assert.ok(Number.isInteger(key)&&key>=0&&key<=3,q.id+' answer index');
  assert.equal(q.opciones[key],q.respuestaLiteral,q.id+' correct text altered by reordering');
  assert.equal(new Set(q.opciones).size,4,q.id+' duplicated options');
  assert.ok(!ids.has(q.id),q.id+' duplicated ID');
  ids.add(q.id);counts[key]++;total++;
 }
 assert.ok(Math.max(...counts)-Math.min(...counts)<=1,'UC3M answer-position bias '+path);
}
assert.equal(total,260);
console.log('UC3M_260_ANSWER_POSITIONS_BALANCED_WITH_LITERAL_ANCHORS_OK');
