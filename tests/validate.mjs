import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));

const programme = json('data/programa.json');
const rules = read('PROJECT_RULES.md');
const app = read('assets/app.js');
const serviceWorker = read('sw.js');
const index = read('index.html');
const packageJson = json('package.json');

assert.equal(programme.project, 'opoweb-v2');
assert.equal(programme.version, '0.4.0');
assert.equal(packageJson.version, '0.4.0');
assert.ok(index.includes('v0.4.0'));
assert.equal(programme.temas.length, 19, 'El programa debe contener exactamente 19 temas');
assert.deepEqual(programme.temas.map(item => item.numero), Array.from({ length: 19 }, (_, index) => index + 1));

const approved = programme.temas.filter(item => item.estado === 'APROBADO_USUARIO');
const inReview = programme.temas.filter(item => item.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(item => item.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(item => item.numero), [1, 2, 3, 4]);
assert.ok(approved.every(item => item.aprobadoEl === '2026-07-17'));
assert.deepEqual(inReview, []);
assert.equal(pending.length, 15, 'Los temas 5-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(4).every(item => !item.manual && !item.preguntas), 'Los temas 5-19 no deben heredar teoría ni preguntas');

const expected = {
  1: { range: [10, 55], extra: [166, 167, 168, 169], matrixRows: 6 },
  2: { range: [1, 33], extra: [], matrixRows: 5 },
  3: { range: [53, 105], extra: [], matrixRows: 9 },
  4: { range: [106, 126], extra: [], matrixRows: 7 }
};

for (const theme of approved) {
  const base = `content/la-puebla/tema-${String(theme.numero).padStart(2, '0')}`;
  const matrix = json(`${base}/matriz.json`);
  const questions = json(`${base}/preguntas.json`);
  const approval = read(`${base}/aprobacion.md`);
  const manual = read(`${base}/manual.md`);

  assert.equal(matrix.tema, theme.numero);
  assert.equal(matrix.estado, 'APROBADO_USUARIO');
  assert.equal(matrix.aprobadoEl || theme.aprobadoEl, '2026-07-17');
  const rows = matrix.filas || matrix.cobertura;
  assert.equal(rows.length, expected[theme.numero].matrixRows);
  assert.deepEqual(questions.preguntas, []);
  assert.ok(['PENDIENTE_REVISION', 'PENDIENTE_REVISION_POST_APROBACION'].includes(questions.estado));
  assert.ok(approval.includes(`«Tema ${theme.numero} aprobado»`));
  assert.ok(approval.includes('17 de julio de 2026'));
  assert.ok(manual.includes('**Estado:** APROBADO POR EL USUARIO'));
  assert.ok(manual.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
  assert.ok(manual.split('\n').length > 500, `El manual del tema ${theme.numero} parece truncado`);

  const [start, end] = expected[theme.numero].range;
  for (let article = start; article <= end; article += 1) {
    assert.ok(
      manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`) || manual.includes(`Artículo ${article}.`),
      `Falta el artículo ${article} en el tema ${theme.numero}`
    );
  }
  for (const article of expected[theme.numero].extra) {
    assert.ok(manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`), `Falta el artículo ${article} en el tema ${theme.numero}`);
  }
}

const manual4 = read('content/la-puebla/tema-04/manual.md');
for (const marker of [
  'dictamen favorable',
  'cuatro años',
  'seis meses',
  'Pleno de la Corporación',
  'reformatio in peius',
  'actos de trámite cualificados',
  'suspensión automática por falta de respuesta',
  'error de hecho',
  'Junta de Gobierno',
  'Ley 7/1985'
]) assert.ok(manual4.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 4: ${marker}`);

assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.4.0'"));

for (const number of [1, 2, 3, 4]) {
  const folder = `tema-${String(number).padStart(2, '0')}`;
  for (const file of ['manual.md', 'matriz.json', 'aprobacion.md', 'preguntas.json']) {
    assert.ok(serviceWorker.includes(`./content/la-puebla/${folder}/${file}`), `La PWA debe incluir ${folder}/${file}`);
  }
}

const forbiddenFiles = [
  'assets/js/puebla-v68.js',
  'assets/js/ui-v90-pedagogia.js',
  'assets/js/asset-manifest-v83.js',
  'data/oposiciones.js'
];
for (const path of forbiddenFiles) assert.equal(fs.existsSync(path), false, `No debe existir el archivo ${path}`);

console.log(JSON.stringify({
  project: programme.project,
  version: programme.version,
  officialThemes: programme.temas.length,
  userApprovedThemes: approved.length,
  themesInUserReview: inReview.length,
  pendingThemes: pending.length,
  theme4Questions: json('content/la-puebla/tema-04/preguntas.json').preguntas.length,
  theme4ManualLines: manual4.split('\n').length,
  status: 'TEMA_4_APROBADO_VALIDADO'
}, null, 2));