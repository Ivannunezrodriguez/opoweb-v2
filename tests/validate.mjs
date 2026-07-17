import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const serviceWorker = read('sw.js');
assert.equal(programme.version, '0.12.0');
assert.equal(json('package.json').version, '0.12.0');
assert.ok(read('index.html').includes('v0.12.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12]);
assert.deepEqual(review.map(t => t.numero), [13]);
assert.equal(pending.length, 6);
assert.ok(programme.temas.slice(13).every(t => !t.manual));

for (const t of approved) {
  const base = `content/la-puebla/tema-${String(t.numero).padStart(2, '0')}`;
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t13 = programme.temas[12];
const base13 = 'content/la-puebla/tema-13';
const matrix13 = json(`${base13}/matriz.json`);
const questions13 = json(`${base13}/preguntas.json`);
assert.equal(t13.capitulos.length, 5);
assert.equal(matrix13.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix13.cobertura.length, 5);
assert.equal(matrix13.cifras.length, 4);
assert.equal(questions13.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions13.preguntas, []);
assert.ok(read(`${base13}/manual.md`).includes('Tema cerrado: **NO**'));
assert.ok(read(`${base13}/feedback.md`).includes('Tema 13 aprobado'));

const files13 = ['manual.md','matriz.json','feedback.md','preguntas.json','articulos.md','bloque-01-conceptos-usos.md','bloque-02-tipos-certificados.md','bloque-03-soportes.md','bloque-04-prestadores-servicios.md','bloque-05-administraciones.md'];
for (const file of files13) {
  assert.ok(exists(`${base13}/${file}`), `Falta ${file}`);
  assert.ok(!serviceWorker.includes(`./${base13}/${file}`));
}

const joined = files13.filter(f => f.endsWith('.md')).map(f => read(`${base13}/${f}`)).join('\n').toLowerCase();
for (const term of ['firma electrónica cualificada','sello electrónico','autoridad de registro','lista de confianza','firma remota','cinco años','quince años','código seguro de verificación']) assert.ok(joined.includes(term), `Falta ${term}`);
for (const term of ['Art. 3','Art. 20','Art. 24','Art. 25','Art. 45','Anexo I','Anexo III','Anexo IV']) assert.ok(read(`${base13}/articulos.md`).includes(term));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.12.0'"));
assert.equal(exists('.github/workflows/apply-t13-approval.yml'), false);
console.log(JSON.stringify({version: programme.version, approved: approved.length, review: review.length, pending: pending.length, status: 'TEMA_13_EN_REVISION_VALIDADO'}, null, 2));