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
  // Las actas preexistentes expresan una reserva de certificación con terminología
  // equivalente (p. ej. «Certificación integral: NO» o «E2E pendiente»).
  // Exigir un límite explícito en vez de dos frases literales arbitrarias.
  const limite = /(?:no\s+(?:(?:se|ha)\s+)*(?:verificad[oa]|acreditad[oa]|certificad[oa]|certifica|declara|constituyen)|sin\s+(?:certificaci[oó]n|prueba)|pendiente(?:s)?|certificaci[oó]n\s+integral\s*[:=]\s*NO|CERTIFICADO_INTEGRAL\s*[:=]\s*NO)/i;
  const alcance = /(?:E2E|navegador|accesibilidad|certificaci[oó]n integral|CERTIFICADO_INTEGRAL|GitHub Actions|CI)/i;
  assert.ok(limite.test(proof) && alcance.test(proof),
    'Acta sin reservas de certificación funcional explícitas: T' + topic.numero);
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
for (const [number, boe] of [[2,'BOE-A-2015-10565'],[3,'BOE-A-2015-10565'],[4,'BOE-A-2015-10566'],[5,'BOE-A-2015-10566']]) {
  const theme = program.temas.find(t => t.numero === number);
  assert.equal(theme.estado, 'AUDITADO', 'Estado jurídico T' + number);
  assert.equal(json(theme.matriz).estado, 'AUDITADO', 'Matriz jurídica desactualizada T' + number);
  const items = json(theme.preguntas).preguntas;
  assert.equal(items.length, 12);
  for (const q of items) {
    assert.ok(q.referencia.includes(boe), 'Falta BOE primario en ' + q.id);
    assert.equal(q.respuestaLiteral, q.opciones[q.correcta], 'Clave literal incoherente en ' + q.id);
  }
}
const privacy = program.temas.find(topic => topic.numero === 6);
assert.equal(privacy.estado, 'AUDITADO');
assert.equal(json(privacy.matriz).estado, 'AUDITADO');
const privateBank = json(privacy.preguntas).preguntas;
assert.equal(privateBank.length, 12);
for (const q of privateBank) {
  assert.ok(q.referencia.includes('eur-lex.europa.eu') || q.referencia.includes('BOE-A-2018-16673'), 'Falta fuente normativa T06: ' + q.id);
  assert.equal(q.respuestaLiteral, q.opciones[q.correcta], 'Respuesta modificada T06: ' + q.id);
}
const breach = privateBank.find(q => q.id === 'UC3M-T06-011');
assert.ok(breach.pregunta.includes('debe notificarse'));
assert.ok(breach.justificacion.includes('salvo que sea improbable'));
for (const number of [7,12]) {
  const theme = program.temas.find(t => t.numero === number);
  assert.equal(theme.estado, 'AUDITADO', 'T' + number + ' sin auditoría declarada');
  assert.equal(json(theme.matriz).estado, 'AUDITADO', 'Matriz T' + number + ' no sincronizada');
  const bank = json(theme.preguntas).preguntas;
  assert.equal(bank.length, 12, 'Banco histórico T' + number + ' alterado');
  for (const item of bank) {
    assert.equal(item.respuestaLiteral, item.opciones[item.correcta], 'Clave cambiada en T' + number + ': ' + item.id);
    assert.ok(item.referencia.includes(number === 7 ? 'BOE-A-2019-10102' : 'BOE-A-1995-24292') || (number === 12 && item.referencia.includes('BOE-A-1995-24292')), 'Fuente primaria ausente en ' + item.id);
  }
}
const transparency = json(program.temas.find(t => t.numero === 7).preguntas).preguntas.find(q => q.id === 'UC3M-T07-007');
assert.match(transparency.justificacion, /20 días hábiles/);
const prevention = json(program.temas.find(t => t.numero === 12).matriz);
assert.equal(prevention.controlAuditoriaJuridica20261109.reforma, 'Ley 1/2026');
const eleventh = program.temas.find(topic => topic.numero === 11);
assert.equal(eleventh.estado, 'AUDITADO');
assert.equal(json(eleventh.matriz).estado, 'AUDITADO');
assert.equal(json(eleventh.preguntas).preguntas.length, 12);
assert.ok(eleventh.actaAuditoria?.includes('UC3M_T11_AUDITORIA_INGRESO_PROVISION_INCOMPATIBILIDADES'));
const tenth = program.temas.find(topic => topic.numero === 10);
assert.equal(tenth.estado, 'EN_REVISION_USUARIO', 'No aprobar el TREBEP sin cotejar la reforma octubre de 2026 y el corte');
const manual10 = readFileSync(tenth.manual, 'utf8');
assert.ok(manual10.includes('Ley 4/2026'));
assert.ok(manual10.includes('100 %'));
const equality = program.temas.find(topic => topic.numero === 8);
assert.equal(equality.estado, 'AUDITADO');
assert.equal(json(equality.matriz).estado, 'AUDITADO');
assert.equal(json(equality.preguntas).preguntas.length, 12);
for (const item of json(equality.preguntas).preguntas) {
  assert.equal(item.respuestaLiteral, item.opciones[item.correcta], 'Clave T08 alterada: ' + item.id);
  assert.match(item.referencia, /https:\/\/(?:www\.boe\.es|www\.uc3m\.es|uc3m\.es)\//, 'Falta fuente primaria T08: ' + item.id);
}
assert.ok(equality.actaAuditoria.includes('UC3M_T08_AUDITORIA_IGUALDAD'));
for (const [number, source] of [[8,'BOE-A-2007-6115'],[13,'BOE-A-2023-7500']]) {
  const theme = program.temas.find(item => item.numero === number);
  assert.equal(theme.estado, 'AUDITADO', 'Estado T' + number);
  assert.equal(json(theme.matriz).estado, 'AUDITADO');
  assert.ok(theme.actaAuditoria && existsSync(theme.actaAuditoria));
  const q = json(theme.preguntas).preguntas;
  assert.equal(q.length, 12);
  for (const item of q) {
    assert.equal(item.respuestaLiteral, item.opciones[item.correcta], 'Respuesta cambiada en ' + item.id);
    if (number === 8 && Number(item.id.slice(-3)) >= 9) {
      assert.match(item.referencia, /https:\/\/www\.uc3m\.es\//, 'Falta UC3M en ' + item.id);
    } else {
      assert.ok(item.referencia.includes(source), 'Falta BOE en ' + item.id);
    }
  }
}
const losuII = program.temas.find(t => t.numero === 14);
assert.equal(losuII.estado, 'AUDITADO');
assert.equal(json(losuII.matriz).estado, 'AUDITADO');
assert.ok(losuII.actaAuditoria && existsSync(losuII.actaAuditoria));
const losuBank = json(losuII.preguntas).preguntas;
assert.equal(losuBank.length, 14);
for (const q of losuBank) {
  assert.equal(q.respuestaLiteral, q.opciones[q.correcta], 'Clave literal T14 incoherente ' + q.id);
  assert.ok(q.referencia.includes(q.id === 'UC3M-T14-003' ? 'BOE-A-2003-17782' : 'BOE-A-2023-7500'), 'Falta BOE en T14: ' + q.id);
}
const warning2026 = readFileSync(losuII.actaAuditoria, 'utf8');
assert.ok(warning2026.includes('RD 855/2026') && warning2026.includes('22/10/2026'));
for (const [number, source] of [[17,'BOE-A-2024-11858'],[20,'BOE-A-2017-12902']]) {
  const theme = program.temas.find(t => t.numero === number);
  assert.equal(theme.estado, 'AUDITADO');
  assert.equal(json(theme.matriz).estado, 'AUDITADO');
  assert.ok(theme.actaAuditoria && existsSync(theme.actaAuditoria));
  const qs = json(theme.preguntas).preguntas;
  assert.equal(qs.length, 12);
  for (const q of qs) {
    assert.equal(q.respuestaLiteral, q.opciones[q.correcta], 'Respuesta incoherente: ' + q.id);
    assert.ok(q.referencia.includes('https://'), 'Fuente ausente: ' + q.id);
  }
}
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
