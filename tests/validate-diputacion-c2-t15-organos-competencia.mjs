import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/tema-15/';
const read=p=>readFileSync(base+p,'utf8');
const manual=read('manual.md');
const sources=read('fuentes.md');
const report=read('cotejo-manual-organos-competencias-2026-11-05.md');
const matrix=JSON.parse(read('matriz.json'));
const bank=JSON.parse(read('preguntas.json'));

const checks=[
  ['article5 preceptive unit','actuaciones de carácter preceptivo'],
  ['article6 transparency','Ley 19/2013'],
  ['article7 collegial advice','de forma colegiada'],
  ['article8 desconcentration','titularidad y ejercicio'],
  ['article9 mandatory opinion timing','dictamen o informe preceptivo'],
  ['article9 issued restriction','una vez que en el procedimiento concreto se haya emitido'],
  ['article10 nonhierarchy','órgano delegante'],
  ['article11 cross administration','Distintas Administraciones'],
  ['article12 signature publication','no exige publicación'],
  ['article13 substitution appointment','en un acto posterior'],
  ['article14 interested party','interesados que sean parte en el procedimiento'],
  ['article14 conflict','sin relación jerárquica'],
];
for (const [key,phrase] of checks) {
  assert.ok(manual.toLocaleLowerCase('es').includes(phrase.toLocaleLowerCase('es')),
    key+': missing '+phrase);
}
const sections=manual.split('## 3. organos competencia')[1]?.split('## 4. colegiados abstencion')[0];
assert.ok(sections,'Expected block for arts 5–14');
for(const i of [5,6,7,8,9,10,11,12,13,14]){
  assert.match(sections,new RegExp('Artículo '+i+' ·'),'Manual article '+i+' absent');
  assert.ok(report.includes('BOE-A-2015-10566#a'+i),'Missing BOE citation art '+i);
}
assert.ok((sections.match(/¡Foco Examen!:/g)||[]).length>=10,'Need 10 exam traps across arts 5–14');
assert.match(report,/12 pasajes modificados/);
assert.ok(sources.includes('cotejo-manual-organos-competencias-2026-11-05.md'));
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(matrix.controlManualOrganosCompetencia20261105?.pasajesModificados,12);
assert.equal(matrix.controlManualOrganosCompetencia20261105?.certificacionIntegral,false);
assert.equal(matrix.controlManualOrganosCompetencia20261105?.pruebaNavegador,'PENDIENTE');
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((acc,q)=>acc+q.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((acc,q)=>(acc[q.respuestaCorrecta]++,acc),[0,0,0,0]),[5,5,5,5]);
console.log('DIP_C2_T15_ORGANOS_COMPETENCIAS_ARTS_5_14_COTEJO_FOCAL_OK');
