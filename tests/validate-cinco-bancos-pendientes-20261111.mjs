import fs from 'node:fs';
import assert from 'node:assert/strict';
const load = path => JSON.parse(fs.readFileSync(path,'utf8'));
const banks = [
  ['content/diputacion-toledo/tema-22/preguntas.json',24,'correcta'],
  ['content/diputacion-toledo-auxiliar-c2/tema-06/preguntas.json',29,'respuestaCorrecta'],
  ['content/uc3m/tema-10/preguntas.json',12,'correcta'],
  ['content/uc3m/tema-15/preguntas.json',21,'correcta'],
  ['content/uc3m/tema-16/preguntas.json',21,'correcta']
];
let total=0;
let alternatives=0;
const ids=new Set();
for (const [path,expected,answerField] of banks) {
  const body=load(path);
  assert.equal(body.preguntas.length,expected,'Revisar si cambió el banco: '+path);
  for (const q of body.preguntas) {
    assert.ok(typeof q.id==='string' && !ids.has(q.id),'ID duplicado o vacío: '+q.id);
    ids.add(q.id);
    assert.ok(typeof (q.pregunta??q.enunciado)==='string' && (q.pregunta??q.enunciado).length>10,'Sin enunciado '+q.id);
    assert.ok(Array.isArray(q.opciones) && q.opciones.length===4,'Alternativas distintas de 4: '+q.id);
    assert.ok(q.opciones.every(v=>typeof v==='string' && v.trim()),'Alternativa vacía: '+q.id);
    assert.ok(Number.isInteger(q[answerField]) && q[answerField]>=0 && q[answerField]<4,'Clave no válida: '+q.id);
    assert.ok(typeof q.justificacion==='string' && q.justificacion.trim(),'Sin explicación: '+q.id);
    assert.ok(typeof q.referencia==='string' && q.referencia.trim(),'Sin cita: '+q.id);
    alternatives+=q.opciones.length;
    total++;
  }
}
assert.equal(total,107);
assert.equal(alternatives,428);
console.log('Cinco bancos pendientes: 107 preguntas, 428 alternativas, claves y citas estructuralmente completas.');
