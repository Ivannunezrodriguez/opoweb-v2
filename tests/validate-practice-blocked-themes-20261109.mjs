import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const src = read('assets/practice.js');

const blocked = [
  { id: 'diputacion-toledo-administrativo-c1-2026', tema: 22, program: 'data/programa-diputacion-administrativo-2026.json', status: 'EN_AUDITORIA_ESTATUTOS_COMPLETOS_PENDIENTES' },
  { id: 'diputacion-toledo-auxiliar-c2-2026', tema: 6, program: 'data/programa-diputacion-auxiliar-c2-2026.json', status: 'BORRADOR' }
];
for (const item of blocked) {
  const tema = json(item.program).temas.find(x => x.numero === item.tema);
  assert.equal(tema.estado, item.status, 'Estado legal alterado de ' + item.id);
  assert.ok(src.includes(`if (call.id === '${item.id}' && tema === ${item.tema}) return [];`), 'Se ofrece un tema bloqueado como evaluable: ' + item.id);
}

const start = src.indexOf('function startThemeTest(theme) {');
const end = src.indexOf('function renderOpenCase(', start);
assert.ok(start >= 0 && end > start);
const guard = src.slice(start,end);
assert.ok(guard.includes('if (!questions.length) {'));
assert.ok(guard.indexOf('if (!questions.length)') < guard.indexOf('renderExercise(questions,'));

const sims = json('content/olias-auxiliar-edificios/simulacros.json').simulacros;
assert.equal(sims.length, 2);
const allIds = new Set();
for (const n of [12,14]) {
  for (const q of json(`content/olias-auxiliar-edificios/tema-${n}/preguntas.json`).preguntas) allIds.add(q.id);
}
for (const sim of sims) {
  assert.equal(sim.preguntas.length, 70);
  assert.equal(sim.preguntas.filter(q => typeof q === 'string').length, 50);
  const theory = sim.preguntas.slice(0,50);
  assert.ok(theory.every(x => typeof x === 'string'));
  assert.equal(new Set(theory).size, 50);
  assert.ok(theory.every(x => !x.startsWith('OLIAS-T13-')), 'Olías T13 permanece dentro del simulacro');
}
for (const id of ['OLIAS-T12-003','OLIAS-T14-003','OLIAS-T12-006','OLIAS-T14-006']) {
  assert.ok(allIds.has(id), 'Repuesto no existente: ' + id);
  assert.ok(sims.some(sim => sim.preguntas.includes(id)), 'Repuesto no utilizado: ' + id);
}
assert.equal(json('data/programa-olias-auxiliar-edificios-2026.json').temas.find(t => t.numero === 13).estado, 'AUDITADO');
assert.ok(!src.includes("if (call.id === 'olias-del-rey-auxiliar-edificios-c2-2026' && tema === 13) return [];"));
console.log('Dos temas bloqueados OAPGT y Olías T13 desbloqueado; simulacros históricos consistentes.');
