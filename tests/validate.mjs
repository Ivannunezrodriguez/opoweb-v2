import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const exists = path => fs.existsSync(path);

const programme = json('data/programa.json');
const serviceWorker = read('sw.js');
const packageJson = json('package.json');
const index = read('index.html');
const app = read('assets/app.js');
const rules = read('PROJECT_RULES.md');

assert.equal(programme.project, 'opoweb-v2');
assert.equal(programme.version, '0.10.0');
assert.equal(packageJson.version, '0.10.0');
assert.ok(index.includes('v0.10.0'));
assert.equal(programme.temas.length, 19);
assert.deepEqual(programme.temas.map(t => t.numero), Array.from({ length: 19 }, (_, i) => i + 1));

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const inReview = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10]);
assert.deepEqual(inReview.map(t => t.numero), [11]);
assert.equal(pending.length, 8);
assert.ok(programme.temas.slice(11).every(t => !t.manual && !t.preguntas));

const rows = {1:6,2:5,3:9,4:7,5:8,6:6,7:7,8:8,9:8,10:8};
for (const theme of approved) {
  const folder = `tema-${String(theme.numero).padStart(2, '0')}`;
  const base = `content/la-puebla/${folder}`;
  const manual = read(`${base}/manual.md`);
  const matrix = json(`${base}/matriz.json`);
  const questions = json(`${base}/preguntas.json`);
  const approval = read(`${base}/aprobacion.md`);
  assert.equal(theme.aprobadoEl, '2026-07-17');
  assert.equal(matrix.tema, theme.numero);
  assert.equal(matrix.estado, 'APROBADO_USUARIO');
  assert.equal((matrix.filas || matrix.cobertura).length, rows[theme.numero]);
  assert.deepEqual(questions.preguntas, []);
  assert.ok(['PENDIENTE_REVISION','PENDIENTE_REVISION_POST_APROBACION'].includes(questions.estado));
  assert.ok(approval.includes(`«Tema ${theme.numero} aprobado»`));
  assert.ok(manual.includes('**Estado:** APROBADO POR EL USUARIO'));
  assert.ok(manual.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
  for (const file of ['manual.md','matriz.json','aprobacion.md','preguntas.json']) {
    assert.ok(serviceWorker.includes(`./content/la-puebla/${folder}/${file}`));
  }
}

for (const path of [
  'content/la-puebla/tema-08/articulos.md',
  'content/la-puebla/tema-09/articulos.md',
  'content/la-puebla/tema-10/articulos.md'
]) assert.ok(exists(path) && serviceWorker.includes(`./${path}`));

const theme11 = programme.temas[10];
const base11 = 'content/la-puebla/tema-11';
const manual11 = read(`${base11}/manual.md`);
const matrix11 = json(`${base11}/matriz.json`);
const questions11 = json(`${base11}/preguntas.json`);
const feedback11 = read(`${base11}/feedback.md`);
const lgt11 = read(`${base11}/articulos-lgt.md`);
const rgrDebt11 = read(`${base11}/articulos-rgr-deuda.md`);
const rgrApremio11 = read(`${base11}/articulos-rgr-apremio.md`);

assert.equal(theme11.estado, 'EN_REVISION_USUARIO');
assert.equal(theme11.manual, `${base11}/manual.md`);
assert.equal(theme11.matriz, `${base11}/matriz.json`);
assert.equal(theme11.feedback, `${base11}/feedback.md`);
assert.equal(theme11.preguntas, `${base11}/preguntas.json`);
assert.equal(theme11.trazabilidad, `${base11}/articulos.md`);
assert.equal(theme11.capitulos.length, 6);
assert.equal(theme11.trazabilidadDetallada.length, 4);
assert.equal(matrix11.tema, 11);
assert.equal(matrix11.estado, 'EN_REVISION_USUARIO');
assert.equal(matrix11.cobertura.length, 7);
assert.equal(matrix11.capitulos.length, 6);
assert.equal(matrix11.trazabilidad.length, 5);
assert.equal(questions11.estado, 'NO_CREADAS_HASTA_APROBACION_TEORICA');
assert.deepEqual(questions11.preguntas, []);
assert.ok(manual11.includes('**Estado:** EN REVISIÓN DEL USUARIO'));
assert.ok(manual11.includes('Tema cerrado: **NO**'));
assert.ok(manual11.includes('Publicación como aprobado: **NO**'));
assert.ok(!manual11.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(feedback11.includes('`EN_REVISION_USUARIO`'));
assert.ok(feedback11.includes('Tema 11 aprobado'));

for (const file of [
  `${base11}/manual.md`, `${base11}/matriz.json`, `${base11}/feedback.md`, `${base11}/preguntas.json`,
  `${base11}/articulos.md`, `${base11}/articulos-lgt.md`, `${base11}/articulos-rgr.md`,
  `${base11}/articulos-rgr-deuda.md`, `${base11}/articulos-rgr-apremio.md`,
  ...theme11.capitulos
]) assert.ok(exists(file), `Falta ${file}`);

for (const article of [28,31,32,60,61,62,63,64,65,71,72,73,74,82,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177]) {
  assert.ok(lgt11.includes(`| ${article} |`), `Falta LGT ${article}`);
}
assert.ok(lgt11.includes('| 221.1 |') && lgt11.includes('| 221.6 |'));
for (let article = 32; article <= 60; article += 1) assert.ok(rgrDebt11.includes(`| ${article} |`));
for (let article = 68; article <= 122; article += 1) assert.ok(rgrApremio11.includes(`| ${article} |`));
for (const article of ['72 bis','88 bis','103 bis','103 ter','104 bis']) assert.ok(rgrApremio11.includes(`| ${article} |`));

const combined11 = [manual11, ...theme11.capitulos.map(read), lgt11, rgrDebt11, rgrApremio11].join('\n').toLowerCase();
for (const marker of [
  'periodo voluntario','periodo ejecutivo','procedimiento de apremio',
  '20 del mes siguiente','5 del segundo mes siguiente','20 del mismo mes','5 del mes siguiente',
  'recargo ejecutivo','apremio reducido','apremio ordinario','25 % de la suma',
  'seis meses','cinco motivos','cuatro motivos','tercería de dominio','tercería de mejor derecho',
  '3 de junio de 2026','21 de diciembre de 2024','31 de enero de 2024','5 de abril de 2023'
]) assert.ok(combined11.includes(marker), `Falta contenido estructural: ${marker}`);

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.10.0'"));
assert.ok(!serviceWorker.includes('tema-11/'));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));

for (const path of [
  'assets/js/puebla-v68.js','assets/js/ui-v90-pedagogia.js','assets/js/asset-manifest-v83.js',
  'data/oposiciones.js','.github/workflows/apply-t11-approval.yml'
]) assert.equal(exists(path), false, `No debe existir ${path}`);

console.log(JSON.stringify({
  project: programme.project,
  version: programme.version,
  approved: approved.length,
  inReview: inReview.length,
  pending: pending.length,
  theme11Modules: theme11.capitulos.length,
  theme11Questions: questions11.preguntas.length,
  status: 'TEMA_11_MODULAR_EN_REVISION_VALIDADO'
}, null, 2));
