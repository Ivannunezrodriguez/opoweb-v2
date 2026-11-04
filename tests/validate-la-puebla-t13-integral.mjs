import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const root='content/la-puebla/tema-13/';
const rd=f=>readFileSync(root+f,'utf8');
const bank=JSON.parse(rd('preguntas.json'));
const matrix=JSON.parse(rd('matriz.json'));
const report=rd('cotejo-integral-2026-11-04.md');
assert.equal(matrix.controlIntegralEditorial20261104?.estado,'AUDITADO');
assert.equal(matrix.controlIntegralEditorial20261104?.alternativasVerificadas,48);
assert.equal(bank.preguntas.length,12);
assert.equal(matrix.capitulos.length,5);
for(const path of matrix.capitulos){assert(existsSync(path),'Missing thematic chapter: '+path);}
assert.equal(matrix.cobertura.length,5);
const letters=[0,0,0,0];
for(const q of bank.preguntas){
 assert.equal(q.opciones.length,4);
 assert.equal(new Set(q.opciones).size,4,'duplicated options: '+q.id);
 assert.equal(q.respuestaLiteral,q.opciones[q.respuestaCorrecta]);
 assert(q.justificacion.length>70&&q.trampaExamen.length>30&&q.referencia.length>25);
 const needle='### '+q.id+' — '+q.enunciado;
 assert(report.includes(needle),'Missing four-choice legal audit for: '+q.id);
 const segment=report.split(needle)[1].split('\n### ')[0].split('\n## ')[0];
 for(const label of ['A','B','C','D'])assert(segment.includes('| **'+label+'** | '+q.opciones[label.charCodeAt(0)-65]),'No actual distractor legal analysis: '+q.id+' '+label);
 letters[q.respuestaCorrecta]++;
}
assert.deepEqual(letters,[3,3,3,3]);
const q8=bank.preguntas.find(q=>q.id==='LP-T13-008');
assert(q8.respuestaLiteral.includes('revocación publicada'));
assert(!q8.respuestaLiteral.includes('evita su uso para nuevas firmas'));
assert(rd('feedback.md').includes('ya no está vacío'));
assert(rd('index.md').includes('cotejo jurídico-editorial integral'));
assert(rd('manual.md').includes('**revocación**'));
assert(rd('bloque-04-prestadores-servicios.md').includes('**3 días hábiles**'));
console.log('TEMA_13_PUEBLA_48_OPTION_JURIDICAL_EDITORIAL_AUDIT_COMPLETE;_BROWSER_REAL_NOT_CERTIFIED');
