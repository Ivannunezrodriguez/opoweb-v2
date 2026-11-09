import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const j=(p)=>JSON.parse(readFileSync(p,'utf8'));
const t=(p)=>readFileSync(p,'utf8');
const baseP='content/la-puebla/',baseU='content/uc3m/';
const b10=j(baseP+'tema-10/preguntas.json');
const b13=j(baseP+'tema-13/preguntas.json');
const b16=j(baseU+'tema-16/preguntas.json');
const map=(bank,id)=>{const q=bank.preguntas.find(q=>q.id===id);assert(q,'Missing '+id);const key=q.respuestaCorrecta??q.correcta;assert.equal(q.respuestaLiteral,q.opciones[key]);return q;};
const t10=map(b10,'LP-T10-001');
assert.match(t10.enunciado,/literalidad del artículo 31\.1/);
assert.match(t10.respuestaLiteral,/de acuerdo con su capacidad económica/);
assert.match(t(baseP+'tema-10/manual.md'),/No confundirlo con los dos principios/);
const q4=map(b13,'LP-T13-004');
assert.match(q4.enunciado,/INCORRECTA/);
assert.match(q4.respuestaLiteral,/simplemente por anunciarse/);
assert(q4.opciones.some(v=>v.includes('requisitos del anexo')));
const q9=map(b13,'LP-T13-009');
assert.match(q9.enunciado,/NO constituye una comprobación técnica/);
assert.match(q9.respuestaLiteral,/imagen visual/);
assert.match(t(baseP+'tema-13/manual.md'),/puede dar \*\*varias respuestas\*\*/);
for(const id of ['UC3M-T16-014','UC3M-T16-015']){
 const q=map(b16,id);assert.match(q.pregunta,/asignatura/i);assert.match(q.referencia,/uc3m\.es\/(?:grado|ss\/Satellite\/Grado)/);
}
assert.match(map(b16,'UC3M-T16-015').pregunta,/dispone de convocatoria extraordinaria/);
assert.match(t(baseU+'tema-16/manual.md'),/\*\*Asignatura especial\*\*/);
for(const [bank,length,counts] of [[b10,12,[3,3,3,3]],[b13,12,[3,3,3,3]],[b16,21,[5,5,5,6]]]){
 assert.equal(bank.preguntas.length,length);
 const actual=[0,0,0,0];for(const q of bank.preguntas){const k=q.respuestaCorrecta??q.correcta;actual[k]++;assert.equal(q.opciones[k],q.respuestaLiteral);}
 assert.deepEqual([...actual].sort(),[...counts].sort());
}
console.log('THREE_PRIORITY_TOPICS_UNIQUE_ANSWER_AND_SCOPE_GUARDS_OK');
