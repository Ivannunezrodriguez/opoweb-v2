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
const ninth = program.temas.find(topic => topic.numero === 9);
assert.equal(ninth.estado, 'AUDITADO', 'El tema técnico debe mantener su revisión demostrada');
assert.equal(json(ninth.matriz).estado, 'AUDITADO');
assert.equal(json(ninth.preguntas).preguntas.length, 12);
const package9 = json('data/uc3m-repasos-complementarios-20261106.json').paquetes.find(p => p.id === 'UC3M-ADIC-20261106-T09');
assert.equal(package9.preguntas.length, 12);
assert.equal(audited.length, 1, 'No ampliar el número de temas AUDITADO sin añadir actas individualizadas y actualizar este control');
assert.equal(program.temas.filter(topic => topic.estado === 'EN_REVISION_USUARIO').length, 19);
console.log('UC3M: 1 AUDITADO con acta y reservas, 19 pendientes; promoción protegida contra cambios masivos.');
