import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = f => readFileSync(f,'utf8');
const json = f => JSON.parse(read(f));
const p = json('data/programa-uc3m-auxiliar-administrativa-2026.json');
const t18=p.temas.find(x=>x.numero===18),t19=p.temas.find(x=>x.numero===19);
assert.equal(t18.estado,'EN_REVISION_USUARIO');
assert.equal(t19.estado,'EN_REVISION_USUARIO');
const qs=json(t18.preguntas).preguntas;
assert.equal(qs.length,12);
assert.equal(qs.find(x=>x.id==='UC3M-T18-001').opciones[qs.find(x=>x.id==='UC3M-T18-001').correcta],'300.468.067,59 euros');
assert.equal(qs.find(x=>x.id==='UC3M-T18-004').opciones[qs.find(x=>x.id==='UC3M-T18-004').correcta],'Capítulo IV, transferencias corrientes');
const qb18=json(t18.preguntas),qb19=json(t19.preguntas);
for (const [theme,bank,primaryCount] of [[18,qb18,4],[19,qb19,3]]) {
  assert.equal(bank.preguntas.length, 12);
  assert.equal(bank.controlTrazabilidadFuente20261109.preguntasConReferenciaPrimaria, primaryCount);
  assert.equal(bank.controlTrazabilidadFuente20261109.cotejoVolumenIPrimarioCompleto, false);
  assert.equal(bank.preguntas.filter(x=>x.estadoContrasteFuente20261109==='PRIMARIA_REFERENCIADA').length,primaryCount);
  assert.equal(bank.preguntas.filter(x=>x.estadoContrasteFuente20261109==='SECUNDARIA_CORROBORADA_O_PENDIENTE').length,12-primaryCount);
  for (const q of bank.preguntas) assert.equal(q.respuestaLiteral,q.opciones[q.correcta], 'Clave incoherente '+q.id);
}
const audit=read('audit/UC3M_T18_T19_COTEJO_BOCM_PRESUPUESTO_2026_2026-11-09.md');
assert.match(audit,/300\.468\.067,59/);
assert.match(audit,/146\.834\.705,33/);
assert.match(audit,/BOCM-20251230-28\.PDF/);
assert.match(audit,/Normas Básicas de Gestión/);
console.log('T18/T19: cifras del BOCM cotejadas; pendientes de auditoría de normas internas completas.');
