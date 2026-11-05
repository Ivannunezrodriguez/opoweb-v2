import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const prog=json('data/programa-diputacion-administrativo-2026.json');
const c=prog.cierreEditorialC1Bloques20261105;
assert.equal(c.temasConCierreEditorialDemostrado,38);
assert.equal(c.cuentaPendientesGlobal,83);
assert.equal(prog.temas[21].estado,'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES');
assert.equal(prog.temas[39].estado,'GENERACION_DESDE_CERO');
const expected={"36":[3,3,1,3,1,1,1,3,3,2,2,2,0,0,0,0,1,2,0,2],"37":[1,0,0,2,1,0,2,3,3,3,3,0,1,1,0,2,1,3,2,2],"38":[0,3,2,3,1,0,1,3,3,1,2,0,1,3,2,0,1,2,0,2],"39":[2,0,1,3,3,1,0,1,2,2,0,2,0,3,1,3,0,3,1,2]};
const modified={"36":4,"37":3,"38":1,"39":5};
const report=read('content/diputacion-toledo/cierre-editorial-36-39-2026-11-05.md');
let total=0,alternatives=0;
for(const n of [36,37,38,39]){
 const prefix='content/diputacion-toledo/tema-'+n+'/';
 const topic=prog.temas[n-1],bank=json(prefix+'preguntas.json'),mat=json(prefix+'matriz.json');
 const manual=read(prefix+'manual.md'),sources=read(prefix+'fuentes.md');
 assert.equal(topic.estado,'AUDITADO');assert.equal(bank.estado,'AUDITADO');assert.equal(mat.estado,'AUDITADO');
 assert.equal(topic.cierreEditorialBloque20261105.certificacionIntegral,false);
 assert.equal(bank.cierreEditorialC1_36_39_20261105.sustituidas,modified[n]);
 assert.equal(bank.cierreEditorialC1_36_39_20261105.certificacionIntegral,false);
 assert.equal(mat.cierreEditorialC1_36_39_20261105.certificacionIntegral,false);
 assert.equal(bank.preguntas.length,20);assert.equal(mat.controlCalidad.preguntas,20);
 assert.equal(mat.trazabilidadIncisos.length,3);
 assert.ok(manual.includes('## Epígrafe oficial'));assert.ok(manual.includes('¡Foco Examen!'));
 assert.ok(manual.includes('|---'));assert.ok(manual.includes('cierre-editorial-36-39-2026-11-05.md'));
 assert.ok(sources.includes('cierre-editorial-36-39-2026-11-05.md'));
 for(let i=0;i<20;i++){
  const q=bank.preguntas[i],id='DIP-T'+n+'-'+String(i+1).padStart(3,'0');
  assert.equal(q.id,id);assert.equal(q.correcta,expected[n][i]);
  assert.equal(q.opciones.length,4);
  assert.equal(new Set(q.opciones.map(s=>s.toLowerCase().trim())).size,4);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta]);
  assert.ok(q.justificacion.length>20&&q.trampa.length>15&&q.referencia.length>15);
  assert.ok(report.includes(id));total++;alternatives+=4;
 }
}
assert.equal(total,80);assert.equal(alternatives,320);
const get=(n,i)=>json('content/diputacion-toledo/tema-'+n+'/preguntas.json').preguntas[i-1];
assert.equal(get(36,14).respuestaLiteral,'=$A3+B$1');
assert.equal(get(36,15).respuestaLiteral,'APTO');
assert.equal(get(36,16).respuestaLiteral,'2');
assert.equal(get(36,20).respuestaLiteral,'Ctrl + G');
assert.ok(get(37,15).respuestaLiteral.includes('COUNT(*)'));
assert.ok(get(37,18).respuestaLiteral.includes(':Departamento'));
assert.ok(get(37,19).respuestaLiteral.includes('formulario principal'));
assert.equal(get(38,19).respuestaLiteral,'Ctrl + Mayús + K');
assert.ok(get(39,13).respuestaLiteral.includes('RAM del sistema'));
assert.equal(get(39,14).respuestaLiteral,'1.000 bytes');
assert.ok(get(39,16).respuestaLiteral.includes('750 W'));
assert.ok(get(39,18).respuestaLiteral.includes('transmisión térmica'));
assert.ok(get(39,19).respuestaLiteral.includes('firmas'));
for(const n of [36,37,38]){
 const manual=read('content/diputacion-toledo/tema-'+n+'/manual.md');
 assert.ok(manual.includes('Ctrl + G'));
 assert.ok(!manual.includes('| Guardar | **Ctrl + S** |'));
}
console.log('DIP_C1_T36_T39_80_QUESTIONS_320_ALTERNATIVES_13_REPLACEMENTS_AND_SHORTCUTS_OK');
