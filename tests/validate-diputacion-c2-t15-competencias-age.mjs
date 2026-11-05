import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const dir = 'content/diputacion-toledo-auxiliar-c2/tema-15/';
const read = name => readFileSync(dir + name, 'utf8');
const manual = read('manual.md');
const sources = read('fuentes.md');
const report = read('cotejo-manual-competencias-age-2026-11-05.md');
const matrix = JSON.parse(read('matriz.json'));
const questions = JSON.parse(read('preguntas.json')).preguntas;

const checks = [
  'superior común',
  'órgano superior del que dependa el delegado',
  'aprobación previa',
  'personas que hubieran perdido esa condición como consecuencia de su jubilación',
  'Real Decreto-ley 6/2023',
  'titular del Ministerio o del Presidente del Gobierno',
  'con carácter anual',
  'previo informe, en todo caso, del Ministerio competente por razón de la materia',
  'potestad sancionadora',
  'expropiatoria',
  'dependencia funcional del Ministerio del Interior',
  'Jefatura de FF. y CC. de Seguridad del Estado'
];
for (const phrase of checks) {
  assert.ok(manual.toLocaleLowerCase('es').includes(phrase.toLocaleLowerCase('es')), 'Missing T15 legal rule: ' + phrase);
}
for (const art of [9,63,64,73,75]) {
  assert.ok(report.includes('BOE-A-2015-10566#a'+art),'No primary article citation: '+art);
}
assert.ok(report.includes('BOE-A-2023-25758'),'Missing Dec 2023 reform');
assert.ok(sources.includes('cotejo-manual-competencias-age-2026-11-05.md'));
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(matrix.controlManualCompetenciasAge20261105?.manualCertificado,false);
assert.equal(matrix.controlManualCompetenciasAge20261105?.navegadorReal,'PENDIENTE');
assert.equal(questions.length,20);
assert.equal(questions.reduce((n,q)=>n+q.opciones.length,0),80);
assert.deepEqual(questions.reduce((xs,q)=>(xs[q.respuestaCorrecta]++,xs),[0,0,0,0]),[5,5,5,5]);
const sg = manual.split('## 4. Artículo 64 · Secretarios generales')[1]?.split('## 5. Artículo 65 · Secretarios generales técnicos')[0] ?? '';
assert.match(sg,/propuesta del \*\*titular del Ministerio o del Presidente del Gobierno\*\*/);
const subsecretary = manual.split('## 3. Artículo 63 · Subsecretarios')[1]?.split('## 4. Artículo 64')[0] ?? '';
assert.match(subsecretary,/jubilación/);
console.log('DIP_C2_T15_ARTS_9_63_64_73_BOE_2023_RETIREMENT_PRIOR_APPROVALS_OK');
