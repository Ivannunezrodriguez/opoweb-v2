import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = p => readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const program = json('data/programa-uc3m-auxiliar-administrativa-2026.json');
const t16 = program.temas.find(t => t.numero === 16);
const t17 = program.temas.find(t => t.numero === 17);
assert.equal(t16.estado, 'EN_REVISION_USUARIO');
assert.equal(t17.estado, 'AUDITADO');
assert.equal(json(t17.matriz).estado, 'AUDITADO');
assert.ok(t17.actaAuditoria);
const acta = read(t17.actaAuditoria);
assert.match(acta, /RD 535\/2026/);
assert.match(acta, /02\/07\/2026/);
const questions = json(t17.preguntas).preguntas;
assert.equal(questions.length, 12);
for (const q of questions) {
  assert.equal(q.respuestaLiteral, q.opciones[q.correcta], 'Respuesta original incoherente: ' + q.id);
  assert.ok(q.referencia.includes('https://'), 'Pregunta sin enlace oficial: ' + q.id);
}
assert.match(questions.find(q => q.id === 'UC3M-T17-007').justificacion, /5 puntos/);
assert.match(questions.find(q => q.id === 'UC3M-T17-009').justificacion, /12 estudios/);
const manual = read(t16.manual);
assert.ok(manual.includes('BOE-A-2026-22083'));
assert.ok(manual.includes('23/10/2026'));
assert.ok(manual.includes('artículo 22.4'));
assert.ok(manual.includes('EN_REVISION_USUARIO'));
console.log('T17 auditado con 12 preguntas; T16 en revisión hasta resolver nulidad RD 905/2025 y corte.');
