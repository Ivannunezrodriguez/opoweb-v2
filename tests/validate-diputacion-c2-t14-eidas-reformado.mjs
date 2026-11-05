import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const base='content/diputacion-toledo-auxiliar-c2/tema-14/';
const read=p=>readFileSync(base+p,'utf8');
const manual=read('manual.md');
const report=read('cotejo-eidas-reformado-2026-11-05.md');
const sources=read('fuentes.md');
const matrix=JSON.parse(read('matriz.json'));
const bank=JSON.parse(read('preguntas.json'));
const sec=manual.split('## 16. Servicios y sistemas del marco eIDAS reformado')[1]?.split('## 17. Obligaciones relevantes del prestador')[0]??'';
assert.ok(sec.length>8000,'T14 eIDAS reform content must be detailed, not name-only list');
for(const i of [1,2,3,4,5,6])assert.ok(sec.includes('### 16.'+i),'Missing eIDAS legal subsection '+i);
for(const phrase of [
  'al menos una cartera','**24 meses**','**Voluntario**','**Gratuitas**',
  '**2 años**','**5 años**','**art. 45 quater**',
  '**artículo 29 bis**','**39 bis**','copia de seguridad',
  '**45 decies.2**','**45 duodecies.2**','**24 bis**',
  'presunción de integridad y origen','orden cronológico secuencial'
])assert.ok(sec.toLocaleLowerCase('es').includes(phrase.toLocaleLowerCase('es')),'Missing verified statutory rule: '+phrase);
for(const label of ['**Cartera EUDI ≠ certificado electrónico**','**Declaración de atributos ≠ certificado de firma ≠ identificación obligatoria**','**Firma remota ≠ firma cualificada**','**Libro mayor electrónico cualificado**'])assert.ok(sec.includes(label),'Missing exam trap '+label);
assert.ok((sec.match(/¡Foco Examen!:/g)||[]).length>=6,'Insufficient exam traps across six legal chapters');
assert.ok(manual.includes('**artículo 29 bis del Reglamento eIDAS**'),'Remote signing cross-reference missing');
assert.ok(report.includes('eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa'));
assert.ok(report.includes('eur-lex.europa.eu/eli/reg/2024/1183/oj'));
assert.ok(sources.includes('cotejo-eidas-reformado-2026-11-05.md'));
assert.equal(matrix.controlEidasReformado20261105?.certificacionManualIntegral,false);
assert.equal(matrix.controlEidasReformado20261105?.comprobacionNavegador,'PENDIENTE');
assert.match(matrix.estadoControl,/PENDIENTE_COTEJO_INTEGRAL/);
assert.equal(bank.preguntas.length,20);
assert.equal(bank.preguntas.reduce((s,q)=>s+q.opciones.length,0),80);
assert.deepEqual(bank.preguntas.reduce((a,q)=>(a[q.respuestaCorrecta]++,a),[0,0,0,0]),[5,5,5,5]);
console.log('DIP_C2_T14_EIDAS_2024_WALLET_ATTRIBUTES_REMOTE_ARCHIVE_LEDGER_20_80_OK');
