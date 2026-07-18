import fs from 'node:fs';
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

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

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
assert.equal(questions19.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions19.preguntas, []);
assert.ok(read(`${base19}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base19}/aprobacion.md`).includes('Tema 19 aprobado'));
assert.ok(read(`${base19}/feedback.md`).includes('APROBADO_USUARIO'));
assert.ok(read(`${base19}/fuentes.md`).includes('APROBADO POR EL USUARIO'));

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
for (const source of [
  'Requisitos del sistema de Windows 11','How to Build a Gaming PC','USB Type-C Cable and Connector Specification',
  'Quitar hardware de forma segura en Windows','Agregar o instalar una impresora en Windows',
  'Instalar y usar un escáner en Windows','Grabar y copiar CD'
]) {
  assert.ok(read(`${base19}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.19.0'"));
assert.equal(exists('.github/workflows/apply-t19-approval.yml'), false);
assert.equal(exists('scripts/publish_t19.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme19Questions: questions19.preguntas.length,
  status: 'CONVOCATORIA_LA_PUEBLA_APROBADA_VALIDADA'
}, null, 2));
