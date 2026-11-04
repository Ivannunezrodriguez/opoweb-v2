import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
// Structural QA only: confirms position balance and that shuffling preserved the answer text.
// It cannot certify that the answer or legal explanation was originally correct.
for(let topic=1;topic<=19;topic++){
 const file='content/la-puebla/tema-'+String(topic).padStart(2,'0')+'/preguntas.json';
 const bank=JSON.parse(readFileSync(file,'utf8'));
 assert.equal(bank.preguntas.length,12,'Unexpected bank length: '+file);
 const counts=[0,0,0,0];
 const ids=new Set();
 for(const q of bank.preguntas){
  const key=q.respuestaCorrecta??q.correcta;
  assert.ok(Number.isInteger(key)&&key>=0&&key<=3,q.id+' key out of range');
  assert.equal(q.opciones[key],q.respuestaLiteral,q.id+' original correct answer text changed');
  assert.equal(new Set(q.opciones).size,4,q.id+' duplicated option');
  assert.ok(!ids.has(q.id),q.id+' duplicated ID');
  ids.add(q.id);
  counts[key]++;
 }
 assert.deepEqual(counts,[3,3,3,3],'Predictable answer-position distribution in '+file);
}
console.log('LA_PUEBLA_228_ANSWERS_BALANCED_AND_ANCHORED_TO_LITERAL_OK');
