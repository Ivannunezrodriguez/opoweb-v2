import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const root='content/diputacion-toledo/';
const manifest=json('data/programa-diputacion-administrativo-2026.json');
assert.deepEqual(manifest.temas.filter(t=>t.estado==='AUDITADO').map(t=>t.numero),[1,2,3]);
let questions=0,options=0;
for (let n=1;n<=3;n++){
 const base=root+'tema-0'+n+'/';
 const manual=read(base+'manual.md'),bank=json(base+'preguntas.json'),matrix=json(base+'matriz.json'),sources=read(base+'fuentes.md');
 assert.equal(matrix.estado,'AUDITADO');
 assert.equal(bank.estado,'AUDITADO');
 assert.equal(matrix.cierreEditorial20261105.certificacionIntegral,false);
 assert.equal(bank.preguntas.length,{1:20,2:20,3:22}[n]);
 assert.match(manual,/AUDITADO jurídico-pedagógico/);
 assert.match(manual,/¡Foco Examen!/);
 assert.match(manual,/\|---/);
 assert.match(sources,/cierre-editorial-01-03-2026-11-05/);
 for(const q of bank.preguntas){
  questions++;options+=q.opciones.length;
  assert.equal(q.opciones.length,4,q.id);
  assert.equal(new Set(q.opciones).size,4,q.id);
  assert.equal(q.respuestaLiteral,q.opciones[q.correcta],q.id);
  assert.match(q.referencia,/https:\/\/www\.boe\.es\//,q.id);
  assert.ok(q.justificacion.length>=35 && q.trampa.length>=35,q.id);
 }
}
assert.equal(questions,62);assert.equal(options,248);
const t1=read(root+'tema-01/manual.md'),t2=read(root+'tema-02/manual.md'),t3=read(root+'tema-03/manual.md');
const b1=json(root+'tema-01/preguntas.json'),b3=json(root+'tema-03/preguntas.json');
assert.equal(b1.preguntas[11].respuestaLiteral,'Cuatro');
assert.equal(b1.preguntas[11].opciones[b1.preguntas[11].correcta],'Cuatro');
assert.match(t1,/\*\*2026\*\* \| \*\*69\.3\*\*/);
assert.ok(!t1.includes('existen **tres reformas constitucionales**'));
assert.match(t1,/denominación organizativa vigente/);
assert.match(t2,/\*\*Ley 39\/2015, 37\*\*/);
assert.ok(!t2.includes('**Ley 40/2015, 37**'));
assert.match(t3,/\*\*Ibiza, Formentera/);
assert.match(t3,/primera convocatoria de elecciones al Senado posterior/);
assert.match(b3.preguntas[1].pregunta,/69\.3/);
assert.match(b3.preguntas[1].respuestaLiteral,/Ibiza y Formentera/);
const report=read(root+'cierre-editorial-01-03-2026-11-05.md');
assert.match(report,/248 alternativas/);
for(const n of [1,2,3])for(const q of json(root+'tema-0'+n+'/preguntas.json').preguntas)assert.ok(report.includes(q.id));
console.log('DIP_C1_1_3_AUDITADO_EDITORIAL_62_248_REFORMA_CE_2026_OK');