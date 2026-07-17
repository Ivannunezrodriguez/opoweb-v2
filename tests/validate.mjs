import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const exists = path => fs.existsSync(path);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.11.0');
assert.equal(packageJson.version, '0.11.0');
assert.ok(index.includes('v0.11.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(theme => theme.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(theme => theme.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(theme => theme.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(theme => theme.numero), [1,2,3,4,5,6,7,8,9,10,11]);
assert.deepEqual(review.map(theme => theme.numero), [12]);
assert.equal(pending.length, 7);
assert.ok(programme.temas.slice(12).every(theme => !theme.manual && !theme.preguntas));

for (const theme of approved.slice(0, 10)) {
  const base = `content/la-puebla/tema-${String(theme.numero).padStart(2, '0')}`;
  assert.equal(theme.aprobadoEl, '2026-07-17');
  assert.equal(json(`${base}/matriz.json`).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(`${base}/preguntas.json`).preguntas, []);
  assert.ok(read(`${base}/aprobacion.md`).includes(`«Tema ${theme.numero} aprobado»`));
}

const theme11 = programme.temas[10];
assert.equal(theme11.estado, 'APROBADO_USUARIO');
assert.equal(theme11.capitulos.length, 6);
assert.equal(theme11.trazabilidadDetallada.length, 4);
assert.ok(read('content/la-puebla/tema-11/aprobacion.md').includes('«Tema 11 aprobado»'));

const theme12 = programme.temas[11];
const base12 = 'content/la-puebla/tema-12';
const matrix12 = json(`${base12}/matriz.json`);
const questions12 = json(`${base12}/preguntas.json`);
const manual12 = read(`${base12}/manual.md`);
const articles12 = read(`${base12}/articulos.md`);
const feedback12 = read(`${base12}/feedback.md`);

assert.equal(theme12.estado, 'EN_REVISION_USUARIO');
assert.equal(theme12.capitulos.length, 5);
assert.equal(theme12.subcapitulos.length, 4);
assert.equal(matrix12.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix12.cobertura.length, 5);
assert.equal(matrix12.capitulos.length, 5);
assert.equal(matrix12.subcapitulos.length, 4);
assert.equal(questions12.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions12.preguntas, []);
assert.ok(manual12.includes('**Estado:** EN REVISIÓN DEL USUARIO'));
assert.ok(manual12.includes('Tema cerrado: **NO**'));
assert.ok(feedback12.includes('Tema 12 aprobado'));

const files12 = [
  'manual.md','matriz.json','feedback.md','preguntas.json','articulos.md',
  'bloque-01-normas-generales.md','bloque-02-ibi.md','bloque-03-iae.md',
  'bloque-04-ivtm.md','bloque-04a-ivtm-hecho.md','bloque-04b-ivtm-sujeto.md',
  'bloque-05-iivtnu.md','bloque-05a-iivtnu-hecho.md','bloque-05b-iivtnu-sujetos.md'
];
for (const file of files12) {
  assert.ok(exists(`${base12}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base12}/${file}`), `El tema 12 en revisión no debe precargarse: ${file}`);
}

for (const article of [15,16,17,18,19,56,57,58,59,60,61,62,63,64,78,79,80,81,82,83,92,93,94]) {
  assert.ok(articles12.includes(`| ${article} |`), `Falta TRLRHL ${article}`);
}
for (const marker of ['| 104.1 |','| 104.5 |','| 105 |','| 106.2 |']) assert.ok(articles12.includes(marker));
for (const marker of ['treinta días','concesión','superficie','usufructo','1.000.000','750 kilogramos','lucrativa = adquirente','onerosa = transmitente']) {
  const joined = files12.filter(file => file.endsWith('.md')).map(file => read(`${base12}/${file}`)).join('\n').toLowerCase();
  assert.ok(joined.includes(marker.toLowerCase()), `Falta contenido crítico: ${marker}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.11.0'"));
assert.equal(exists('.github/workflows/apply-t12-approval.yml'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme12Questions: questions12.preguntas.length,
  status: 'TEMA_12_EN_REVISION_VALIDADO'
}, null, 2));
