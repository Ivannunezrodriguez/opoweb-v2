import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/tema-14/';
const read=p=>readFileSync(base+p,'utf8');
const manual=read('manual.md');
const sources=read('fuentes.md');
const report=read('cotejo-rd203-personal-entornos-2026-11-05.md');
const matrix=JSON.parse(read('matriz.json'));
const bank=JSON.parse(read('preguntas.json'));
const admin=manual.split('## 7. administraciones')[1]?.split('## ANEXO')[0]??'';

const checks=[
  ['## 6. Firma del empleado público', ['**art. 22.1**','**22.2**','**22.3**','**22.4**','**Esquema Nacional de Interoperabilidad**']],
  ['### Especialidad estatal: identificación y firma', ['**24.1**','**24.2**','**24.3–4**','**Esquema Nacional de Seguridad**','**cuando estas lo admitan**']],
  ['## 6 bis. Intercambio electrónico en entornos cerrados', ['**25.2**','**25.3**','**25.4**','**25.5**','**Convenio**','**Secretaría General de Administración Digital**']],
];
for(const [heading,terms] of checks){
  const start=admin.indexOf(heading);
  assert.ok(start>=0,'Missing section: '+heading);
  const end=admin.indexOf('\n## ',start+heading.length);
  const chunk=admin.slice(start,end<0?undefined:end);
  for(const term of terms)assert.ok(chunk.includes(term),'Missing '+term+' in '+heading);
  assert.match(chunk,/¡Foco Examen!:/);
}
assert.ok(sources.includes('cotejo-rd203-personal-entornos-2026-11-05.md'));
assert.ok(report.includes('RD 203/2021')&&report.includes('22.3')&&report.includes('25.3'));
const ctrl=matrix.controlRd203PersonalEntornos20261105;
assert.ok(ctrl&&ctrl.estado.includes('PENDIENTE_COTEJO_INTEGRAL'));
assert.equal(ctrl.certificacionIntegral,false);
assert.equal(ctrl.navegadorReal,'PENDIENTE');
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((n,q)=>n+q.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((a,q)=>(a[q.respuestaCorrecta]++,a),[0,0,0,0]),[5,5,5,5]);
console.log('DIP_C2_T14_RD203_PERSONAL_22_24_CLOSED_CHANNEL_25_BANK_20_80_OK');
