import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/tema-14/';
const read=p=>readFileSync(base+p,'utf8');
const manual=read('manual.md');
const sources=read('fuentes.md');
const report=read('cotejo-rd203-administraciones-2026-11-05.md');
const matrix=JSON.parse(read('matriz.json'));
const bank=JSON.parse(read('preguntas.json'));

const admin=manual.split('## 7. administraciones')[1]?.split('## ANEXO')[0]??'';
assert.ok(admin.length>14000,'Administrative chapter should be complete enough for self-study');
const sections=[
  ['## 1. Sistemas de identificación y firma del interesado', ['**10.4**','**10.5**','**art. 27**','**Representante de persona jurídica**']],
  ['## 2. Asistencia en el uso de medios electrónicos', ['**consentimiento expreso**','**por escrito**','**Registro de Funcionarios Habilitados**']],
  ['## 3. Certificado de sede electrónica', ['**AGE**','**\`.gob.es\`**','**o medio equivalente**']],
  ['## 4. Sello electrónico de Administración u órgano', ['**Subsecretaría**','**19.3**','**prestador**']],
  ['## 5. Actuación administrativa automatizada y CSV', ['**al menos 5 años**','**Centro Criptológico Nacional**','**código único**','**21.4.e**']],
  ['## 7. Certificado de empleado público con número de identificación profesional', ['**23.1**','**petición oficial**','**Subsecretaría del Ministerio**']],
  ['## 8. Plataforma de verificación', ['**Secretaría General de Administración Digital**','**libre y gratuita**','**instrumento de adhesión**']],
  ['## 9. Política de firma y certificados', ['**Secretaría de Estado de Digitalización e Inteligencia Artificial**','**BOE**','**PAGe**']],
];
for(let i=0;i<sections.length;i++){
 const [title,terms]=sections[i];
 const s=admin.indexOf(title);
 assert.ok(s>=0,'Missing RD203 target section: '+title);
 const next=admin.indexOf('\n## ',s+title.length);
 const slice=admin.slice(s,next<0?undefined:next);
 for(const term of terms)assert.ok(slice.includes(term),'Missing key legal rule '+term+' in '+title);
 assert.match(slice,/¡Foco Examen!:/);
}
assert.ok((admin.match(/¡Foco Examen!:/g)||[]).length>=8);
assert.ok(report.includes('BOE-A-2021-5032')&&report.includes('BOE-A-2015-10565'));
assert.ok(sources.includes('cotejo-rd203-administraciones-2026-11-05.md'));
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(matrix.controlRd203Administraciones20261105?.subapartadosCorregidos,8);
assert.equal(matrix.controlRd203Administraciones20261105?.reglasEspeciales?.csvVerificacionAniosMinimoAGE,5);
assert.equal(matrix.controlRd203Administraciones20261105?.certificacionIntegral,false);
assert.equal(matrix.controlRd203Administraciones20261105?.navegadorReal,'PENDIENTE');
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((n,q)=>n+q.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((a,q)=>(a[q.respuestaCorrecta]++,a),[0,0,0,0]),[5,5,5,5]);
console.log('DIP_C2_T14_RD203_ADMIN_8_CHAPTERS_SOURCE_CSV_5Y_AND_BANK_20_80_OK');
