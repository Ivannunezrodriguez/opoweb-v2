import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const json = file => JSON.parse(readFileSync(file, 'utf8'));
const program = json('data/programa-uc3m-auxiliar-administrativa-2026.json');
assert.equal(program.temas.length, 20);
assert.ok(program.estadosPermitidos.includes('AUDITADO'));

const audited = program.temas.filter(topic => topic.estado === 'AUDITADO');
for (const topic of audited) {
  const acta = topic.auditoriaTecnica20261109?.acta ?? topic.actaAuditoria;
  assert.ok(acta && existsSync(acta), 'AUDITADO sin acta de evidencias: T' + topic.numero);
  const proof = readFileSync(acta, 'utf8');
  assert.ok(proof.includes('No es una certificación integral') || proof.includes('CERTIFICADO_INTEGRAL'), 'Acta sin reservas explícitas: T' + topic.numero);
  assert.equal(topic.auditoriaTecnica20261109?.certificacionIntegral ?? topic.certificacionIntegral, false);
}
const first = program.temas.find(topic => topic.numero === 1);
assert.equal(first.estado, 'AUDITADO');
assert.equal(json(first.matriz).estado, 'AUDITADO');
const firstQuestions = json(first.preguntas).preguntas;
assert.equal(firstQuestions.length, 12);
for (const q of firstQuestions) {
  assert.match(q.referencia, /https:\/\/www\.boe\.es\//, 'BOE original no enlazado en: ' + q.id);
  assert.equal(q.respuestaLiteral, q.opciones[q.correcta], 'Clave literal incoherente: ' + q.id);
}
const insular = firstQuestions.find(q => q.id === 'UC3M-T01-008');
assert.ok(insular.pregunta.includes('eficacia electoral diferida'));
assert.ok(insular.justificacion.includes('primera') && insular.justificacion.includes('entrada en vigor'));
const ninth = program.temas.find(topic => topic.numero === 9);
assert.equal(ninth.estado, 'AUDITADO', 'El tema técnico debe mantener su revisión demostrada');
assert.equal(json(ninth.matriz).estado, 'AUDITADO');
const auditBank = json(ninth.preguntas).preguntas;
assert.equal(auditBank.length, 12);
for (const item of auditBank) {
  assert.match(item.referencia, /https:\/\/(?:support\.microsoft\.com|support\.google\.com)\//, 'Referencia de fabricante ausente: ' + item.id);
  assert.equal(item.respuestaLiteral, item.opciones[item.correcta], 'Respuesta histórica modificada: ' + item.id);
}
const package9 = json('data/uc3m-repasos-complementarios-20261106.json').paquetes.find(p => p.id === 'UC3M-ADIC-20261106-T09');
assert.equal(package9.preguntas.length, 12);
assert.ok(audited.length >= 1);
const pending = program.temas.filter(topic => topic.estado === 'EN_REVISION_USUARIO').length;
assert.equal(audited.length + pending, 20, 'Aparece un estado no previsto en los 20 temas');
console.log('UC3M: ' + audited.length + ' AUDITADO con acta y reservas, ' + pending + ' pendientes.');
