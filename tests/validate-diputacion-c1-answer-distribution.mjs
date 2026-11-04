import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
// Structural QA: does not attest legal correctness of questions.
let total=0;
for(let topic=1;topic<=40;topic++){
 const path='content/diputacion-toledo/tema-'+String(topic).padStart(2,'0')+'/preguntas.json';
 const data=JSON.parse(readFileSync(path,'utf8'));
 const counts=[0,0,0,0],ids=new Set;
 for(const q of data.preguntas){
  const key=q.correcta??q.respuestaCorrecta;
  assert.ok(Number.isInteger(key)&&key>=0&&key<=3,q.id+' key invalid');
  assert.equal(q.opciones[key],q.respuestaLiteral,q.id+' correct answer literal altered');
  assert.ok(typeof q.pregunta==='string' && q.pregunta.trim(),q.id+' missing rendered question text');
  assert.ok(!Object.hasOwn(q,'enunciado'),q.id+' ambiguous dual title fields');
  assert.equal(new Set(q.opciones).size,4,q.id+' duplicate alternatives');
  assert.ok(!ids.has(q.id),q.id+' duplicate identifier');
  ids.add(q.id);counts[key]++;total++;
 }
 assert.ok(Math.max(...counts)-Math.min(...counts)<=1,path+' has answer-key bias');
}
assert.equal(total,803,'Keep exact C1 bank inventory');
const prl=JSON.parse(readFileSync('content/diputacion-toledo/tema-23/preguntas.json','utf8'));
const item=id=>prl.preguntas.find(q=>q.id===id);
for(const [id,pattern] of [['DIP-T23-015',/15 d[ií]as/],['DIP-T23-017',/emergencia/],['DIP-T23-018',/obligaci[oó]n del trabajador/],['DIP-T23-019',/servicio de prevenci[oó]n/],['DIP-T23-020',/prevenci[oó]n propio/]]){
 const q=item(id);assert(q,'Missing replacement '+id);assert.match(q.pregunta,pattern,'Wrong actual rendered question for '+id);
}
console.log('DIPUTACION_C1_803_ANSWER_POSITIONS_BALANCED_AND_LITERAL_OK');
