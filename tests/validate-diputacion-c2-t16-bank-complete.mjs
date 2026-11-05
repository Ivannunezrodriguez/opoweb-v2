import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = 'content/diputacion-toledo-auxiliar-c2/tema-16/';
const bank = JSON.parse(readFileSync(root + 'preguntas.json','utf8'));
const matrix = JSON.parse(readFileSync(root + 'matriz.json','utf8'));
const report = readFileSync(root + 'cotejo-banco-completo-2026-11-05.md','utf8');
const manual = readFileSync(root + 'manual.md','utf8');
const sources = readFileSync(root + 'fuentes.md','utf8');
const qs = bank.preguntas;
assert.equal(qs.length,20);
assert.equal(new Set(qs.map(x=>x.id)).size,20);
assert.equal(qs.reduce((n,q)=>n+q.opciones.length,0),80);
assert.deepEqual(qs.reduce((acc,q)=>(acc[q.respuestaCorrecta]++,acc),[0,0,0,0]),[5,4,6,5]);
assert.equal(bank.auditoriaBancoCompleto20261105?.preguntas,20);
assert.equal(bank.auditoriaBancoCompleto20261105?.alternativas,80);
assert.equal(bank.auditoriaBancoCompleto20261105?.idsReescritos?.length,15);
assert.equal(bank.auditoriaBancoCompleto20261105?.limitaCertificacionTema,true);
assert.equal(matrix.auditoriaBanco20261105?.cotejoDistractores,'INDIVIDUAL_DOCUMENTADO_80_DE_80');
assert.equal(matrix.auditoriaBanco20261105?.navegador,'PENDIENTE');
assert.equal(matrix.auditoriaBanco20261105?.aprobacionExpresaUsuario,false);
const optionEscaped = s => s.replaceAll('|','\\|').replaceAll('\n',' ');
for(const q of qs){
  assert.match(q.id,/^DT-C2-T16-\d{3}$/);
  assert.ok(q.enunciado && q.justificacion && q.trampaExamen && q.referencia, q.id);
  assert.equal(q.opciones.length,4,q.id);
  assert.ok(Number.isInteger(q.respuestaCorrecta) && q.respuestaCorrecta >= 0 && q.respuestaCorrecta <= 3,q.id);
  assert.equal(new Set(q.opciones.map(x=>x.toLowerCase().trim())).size,4,q.id+' duplicates');
  assert.equal(report.split('#### '+q.id+' · ').length - 1,1,'Falta sección única para '+q.id);
  assert.ok(report.includes('**Enunciado:** '+q.enunciado), 'Falta enunciado literal '+q.id);
  for(let n=0;n<4;n++){
    const label = 'ABCD'[n]+(q.respuestaCorrecta===n?' ✓':'');
    const token = '| **'+label+'** | '+optionEscaped(q.opciones[n])+' | **'+(q.respuestaCorrecta===n?'Correcta':'Incorrecta')+'**: ';
    assert.ok(report.includes(token),'Falta razonamiento literal de '+q.id+' '+label);
  }
  assert.ok(report.includes(q.trampaExamen),'Falta foco examen '+q.id);
}
assert.equal((report.match(/\*\*Correcta\*\*:/g)||[]).length,20);
assert.equal((report.match(/\*\*Incorrecta\*\*:/g)||[]).length,60);
assert.match(report,/No implica una certificación integral del tema/);
assert.match(manual,/20 de 20.*80 de 80/);
assert.match(manual,/no equivale al cierre del tema/i);
assert.match(sources,/cotejo-banco-completo-2026-11-05\.md/);
const q=id=>qs.find(q=>q.id.endsWith(id));
assert.equal(q('001').opciones[2],'Windows + E');
assert.equal(q('004').opciones[1],'Ver');
assert.match(q('013').enunciado,/impresora física/);
assert.match(q('019').opciones[3],/OCR/);
assert.match(q('020').enunciado,/permisos de escritura/);
console.log('DIPUTACION_C2_T16_BANCO_20_PREGUNTAS_80_ALTERNATIVAS_INDIVIDUALES_OK');
