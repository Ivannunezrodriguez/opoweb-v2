import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const json=p=>JSON.parse(read(p));
const data=json('data/uc3m-presupuesto-supuestos-20261106.json');
const report=read('content/uc3m/COTEJO_FUENTE_PRIMARIA_PRESUPUESTO_20261106.md');
assert.equal(data.fecha,'2026-11-06');
assert.equal(data.certificacionIntegral,false);
assert.equal(data.cotejoPrimarioAcotado,true);
assert.equal(data.preguntas.length,16);
assert.ok(report.includes('300.468.067,59 €'));
assert.ok(report.includes('146.834.705,33 €'));
assert.ok(report.includes('61.808.477,69 €'));
assert.ok(report.includes('55.170.132,65 €'));
assert.ok(report.includes('pág. 98/150'));
assert.ok(report.includes('**5.000 € sin IVA**')||report.includes('≤5.000 € sin IVA'));
assert.ok(report.includes('**12.000 €**')||report.includes('≤12.000 €'));
assert.ok(report.includes('**30/60/90/120 días**'));
const originals={18:[2,0,3,1,3,1,0,1,3,2,2,0],19:[1,2,3,0,1,3,3,2,0,0,1,2]};
const counter=[0,0,0,0];let seen=new Set();let all=0;
for(const n of [18,19]){
 const dir='content/uc3m/tema-'+n+'/';
 const bank=json(dir+'preguntas.json');
 const mat=json(dir+'matriz.json');
 const manual=read(dir+'manual.md');
 const sources=read(dir+'fuentes.md');
 assert.equal(bank.preguntas.length,12);
 assert.deepEqual(bank.preguntas.map(q=>q.correcta),originals[n]);
 assert.equal(mat.controlFuentePrimaria20261106.certificacionIntegral,false);
 assert.equal(mat.controlFuentePrimaria20261106.estado,'REVALIDACION_DOCUMENTAL_ACOTADA');
 assert.ok(mat.controlFuentePrimaria20261106.fuente.includes('1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn'));
 assert.ok(manual.includes('COTEJO_FUENTE_PRIMARIA_PRESUPUESTO_20261106.md'));
 assert.ok(sources.includes('COTEJO_FUENTE_PRIMARIA_PRESUPUESTO_20261106.md'));
 assert.ok(manual.includes('¡Foco Examen!')&&manual.includes('|---'));
 const qs=data.preguntas.filter(q=>q.tema===n);
 assert.equal(qs.length,8);
 for(const q of qs){
  all++;
  assert.equal(q.id,'UC3M-PRES-20261106-'+String(all).padStart(3,'0'));
  assert.ok(!seen.has(q.id));seen.add(q.id);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones).size,4);
  assert.equal(q.correcta,(all-1)%4);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
  assert.ok(q.justificacion.length>35 && q.trampaExamen.length>15);
  assert.ok(q.referencia.includes('drive.google.com')||q.referencia.includes('bocm.es'));
  assert.ok(report.includes(q.id));
  assert.ok(report.includes(q.respuestaLiteral));
  counter[q.correcta]++;
 }
}
assert.equal(all,16);
assert.deepEqual(counter,[4,4,4,4]);
const q19=json('content/uc3m/tema-19/preguntas.json');
assert.equal(q19.preguntas[4].id,'UC3M-T19-005');
assert.equal(q19.preguntas[4].respuestaLiteral,'O');
assert.equal(q19.preguntas[5].id,'UC3M-T19-006');
for(const idx of [4,5]){
 assert.ok(q19.preguntas[idx].referencia.includes('pág. 98/150'));
 assert.ok(!q19.preguntas[idx].referencia.includes('pág. 103 aprox.'));
}
const s19=read('content/uc3m/tema-19/fuentes.md');
assert.ok(s19.includes('O = propuesta de pago'));
assert.ok(!s19.includes('**O reconoce obligación**'));
assert.equal(q19.controlFuentePrimaria20261106.respuestasSinCambios,true);
const pkg=json('package.json');
assert.ok(pkg.scripts.test.includes('validate-uc3m-presupuesto-t18-t19-20261106.mjs'));
console.log('UC3M_PRESUPUESTO_VOL_I_PRIMARY_24_EXISTING_16_EXTRA_64_OPTIONS_ART15_PAGE98_OK');
