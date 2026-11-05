import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const prog=json('data/programa-diputacion-administrativo-2026.json');
assert.ok(prog.cierreEditorialC1Bloques20261105.temasConCierreEditorialDemostrado>=30);
assert.ok(prog.cierreEditorialC1Bloques20261105.cuentaPendientesGlobal<=91);
assert.equal(prog.temas[21].estado,'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES');
const positions={"28":[3,2,2,3,0,3,0,2,1,1,0,0,2,1,0,1,3,3,1,2],"29":[3,0,3,1,1,0,1,0,1,2,3,2,2,0,2,2,3,1,0,3],"30":[0,0,1,0,3,2,3,3,3,2,0,1,3,2,0,1,1,2,2,1],"31":[0,0,2,2,3,0,3,1,1,1,2,0,0,1,3,2,2,1,3,3]};
const modifiedCounts={28:6,29:5,30:0,31:4};
const report=read('content/diputacion-toledo/cierre-editorial-28-31-2026-11-05.md');
let count=0,alternatives=0;
for(const n of [28,29,30,31]){
 const path='content/diputacion-toledo/tema-'+n+'/';
 const bank=json(path+'preguntas.json'),mat=json(path+'matriz.json'),manual=read(path+'manual.md'),sources=read(path+'fuentes.md');
 assert.equal(prog.temas[n-1].estado,'AUDITADO');assert.equal(bank.estado,'AUDITADO');assert.equal(mat.estado,'AUDITADO');
 assert.equal(bank.cierreEditorialC1_28_31_20261105.duplicadosSustituidos,modifiedCounts[n]);
 assert.equal(bank.cierreEditorialC1_28_31_20261105.certificacionIntegral,false);
 assert.equal(bank.preguntas.length,20);assert.equal(mat.controlCalidad.preguntas,20);
 assert.ok(manual.includes('¡Foco Examen!'));assert.ok(manual.includes('|---'));
 assert.ok(sources.includes('cierre-editorial-28-31-2026-11-05'));
 for(let i=0;i<20;i++){
  const q=bank.preguntas[i],id='DIP-T'+n+'-'+String(i+1).padStart(3,'0');
  assert.equal(q.id,id);assert.equal(q.correcta,positions[n][i]);assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones.map(s=>s.toLowerCase().trim())).size,4);
  assert.equal(q.opciones[q.correcta],q.respuestaLiteral);
  assert.ok(q.justificacion.length>25&&q.trampa.length>18&&q.referencia.length>20);
  assert.ok(report.includes(id));count++;alternatives+=4;
 }
}
assert.equal(count,80);assert.equal(alternatives,320);
assert.ok(read('content/diputacion-toledo/tema-29/manual.md').includes('150 %'));
assert.ok(read('content/diputacion-toledo/tema-31/manual.md').includes('Ley 6/2020 art. 9.3.a'));
assert.ok(!read('content/diputacion-toledo/tema-31/manual.md').includes('Ley 6/2020 art. 11.3.a'));
console.log('DIP_C1_T28_T31_80Q_320A_15_REDUNDANCIES_CORRECTED_OK');
