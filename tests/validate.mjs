import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.19.0');
assert.equal(packageJson.version, '0.19.0');
assert.ok(index.includes('v0.19.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
assert.equal(review.length, 0);
assert.equal(pending.length, 0);

const markdownLinkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
const externalOrAnchor = target => /^(https?:|mailto:|#)/i.test(target);

for (const t of approved) {
  assert.ok(exists(t.manual), `Falta manual del tema ${t.numero}`);
  assert.ok(exists(t.matriz), `Falta matriz del tema ${t.numero}`);
  assert.ok(exists(t.preguntas), `Falta banco de preguntas del tema ${t.numero}`);
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');

  const questionBank = json(t.preguntas);
  assert.ok(Array.isArray(questionBank.preguntas), `Banco inválido del tema ${t.numero}`);

  const manual = read(t.manual);
  assert.ok(manual.includes('Tema cerrado: **SÍ**'), `Tema ${t.numero} no figura cerrado`);

  const baseDir = path.dirname(t.manual);
  for (const match of manual.matchAll(markdownLinkRegex)) {
    const target = match[1].trim().split('#')[0];
    if (!target || externalOrAnchor(target)) continue;
    const resolved = path.normalize(path.join(baseDir, target));
    assert.ok(exists(resolved), `Enlace roto en tema ${t.numero}: ${target}`);
  }

  const audit = `${baseDir}/auditoria-2026-07-18.md`;
  assert.ok(exists(audit), `Falta informe de auditoría del tema ${t.numero}`);
}

const validateQuestionBank = (tema, prefix) => {
  const bank = json(`content/la-puebla/tema-${String(tema).padStart(2, '0')}/preguntas.json`);
  assert.equal(bank.estado, 'GENERADO_PENDIENTE_REVISION_USUARIO');
  assert.equal(bank.preguntas.length, 12);
  assert.deepEqual(bank.preguntas.map(q => q.id), Array.from({ length: 12 }, (_, i) => `${prefix}-${String(i + 1).padStart(3, '0')}`));
  for (const q of bank.preguntas) {
    assert.equal(q.opciones.length, 4, `${q.id} no tiene cuatro opciones`);
    assert.ok(Number.isInteger(q.respuestaCorrecta), `${q.id} carece de respuesta correcta`);
    assert.ok(q.respuestaCorrecta >= 0 && q.respuestaCorrecta < 4, `${q.id} tiene índice incorrecto`);
    assert.ok(q.justificacion.length > 30, `${q.id} tiene justificación insuficiente`);
    assert.ok(q.trampaExamen.length > 20, `${q.id} carece de trampa de examen`);
    assert.ok(q.referencia.includes('manual.md') || q.referencia.includes('matriz.json') || q.referencia.includes('bloque-'), `${q.id} carece de trazabilidad`);
  }
  return bank;
};

const generatedBanks = Array.from({ length: 19 }, (_, index) => {
  const tema = index + 1;
  return validateQuestionBank(tema, `LP-T${String(tema).padStart(2, '0')}`);
});

const tema6 = read('content/la-puebla/tema-06/manual.md');
assert.ok(tema6.includes('Duración máxima del programa: **dos años**.'));
assert.ok(tema6.includes('| Programa temporal de interino | Máximo 2 años |'));
assert.ok(!tema6.includes('Duración máxima del programa: **cuatro años**.'));
assert.ok(!tema6.includes('| Programa temporal de interino | Máximo 4 años |'));
assert.ok(tema6.includes('nunca puede superar **dos años**'));

const t19 = programme.temas[18];
const base19 = 'content/la-puebla/tema-19';
const matrix19 = json(`${base19}/matriz.json`);
const questions19 = json(`${base19}/preguntas.json`);
assert.equal(t19.capitulos.length, 5);
assert.equal(t19.aprobadoEl, '2026-07-18');
assert.equal(t19.aprobacion, `${base19}/aprobacion.md`);
assert.equal(matrix19.estado, 'APROBADO_USUARIO');
assert.equal(matrix19.aprobadoEl, '2026-07-18');
assert.equal(matrix19.cobertura.length, 5);
assert.equal(matrix19.diferenciasClave.length, 6);
assert.equal(questions19.estado, 'GENERADO_PENDIENTE_REVISION_USUARIO');
assert.equal(questions19.preguntas.length, 12);

const files19 = [
  'manual.md','matriz.json','aprobacion.md','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-ordenador-componentes.md','bloque-02-perifericos-impresoras.md',
  'bloque-03-escaneres.md','bloque-04-almacenamiento-externo-usb.md',
  'bloque-05-opticos.md'
];
for (const file of files19) {
  assert.ok(exists(`${base19}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base19}/${file}`), `No precargado ${file}`);
}

const joined19 = files19.filter(f => f.endsWith('.md')).map(f => read(`${base19}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'hardware','software','firmware','controlador','placa base','cpu','memoria ram','hdd','ssd',
  'usb-c','partición','volumen','impresora','inyección de tinta','tóner','cola','escáner',
  'alimentador automático','resolución óptica','ocr','fat32','exfat','ntfs','expulsión segura',
  'cd-rom','cd-r','cd-rw','dvd-rom','dvd-rw','lector','grabador'
]) {
  assert.ok(joined19.includes(term), `Falta ${term}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.19.0'"));
assert.equal(exists('.github/workflows/apply-t19-approval.yml'), false);
assert.equal(exists('scripts/publish_t19.py'), false);

const generatedQuestions = generatedBanks.reduce((total, bank) => total + bank.preguntas.length, 0);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  auditedReports: approved.length,
  internalLinks: 'VALIDATED',
  generatedThemes: generatedBanks.length,
  generatedQuestions,
  tema6Interinidad: '2_YEARS_VALIDATED',
  status: 'CONVOCATORIA_LA_PUEBLA_TEMAS_1_A_19_TEST_GENERADOS'
}, null, 2));