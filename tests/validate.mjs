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
assert.equal(programme.version, '0.6.0');
assert.equal(packageJson.version, '0.6.0');
assert.ok(index.includes('v0.6.0'));
assert.equal(programme.temas.length, 19, 'El programa debe contener exactamente 19 temas');
assert.deepEqual(programme.temas.map(item => item.numero), Array.from({ length: 19 }, (_, index) => index + 1));

const approved = programme.temas.filter(item => item.estado === 'APROBADO_USUARIO');
const inReview = programme.temas.filter(item => item.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(item => item.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(item => item.numero), [1, 2, 3, 4, 5, 6]);
assert.ok(approved.every(item => item.aprobadoEl === '2026-07-17'));
assert.deepEqual(inReview, []);
assert.equal(pending.length, 13, 'Los temas 7-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(6).every(item => !item.manual && !item.preguntas), 'Los temas 7-19 no deben heredar teoría ni preguntas');

const expectedRows = { 1: 6, 2: 5, 3: 9, 4: 7, 5: 8, 6: 6 };

for (const theme of approved) {
  const base = `content/la-puebla/tema-${String(theme.numero).padStart(2, '0')}`;
  const matrix = json(`${base}/matriz.json`);
  const questions = json(`${base}/preguntas.json`);
  const approval = read(`${base}/aprobacion.md`);
  const manual = read(`${base}/manual.md`);

  assert.equal(matrix.tema, theme.numero);
  assert.equal(matrix.estado, 'APROBADO_USUARIO');
  assert.equal(matrix.aprobadoEl || theme.aprobadoEl, '2026-07-17');
  assert.equal((matrix.filas || matrix.cobertura).length, expectedRows[theme.numero]);
  assert.deepEqual(questions.preguntas, []);
  assert.ok(['PENDIENTE_REVISION', 'PENDIENTE_REVISION_POST_APROBACION'].includes(questions.estado));
  assert.ok(approval.includes(`«Tema ${theme.numero} aprobado»`));
  assert.ok(approval.includes('17 de julio de 2026'));
  assert.ok(manual.includes('**Estado:** APROBADO POR EL USUARIO'));
  assert.ok(manual.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
  assert.ok(manual.split('\n').length > 500, `El manual del tema ${theme.numero} parece truncado`);
}

const articleChecks = {
  1: [[10, 55], [166, 169]],
  2: [[1, 33]],
  3: [[53, 105]],
  4: [[106, 126]],
  6: [[4, 15], [37, 55], [62, 82]]
};

for (const [themeNumber, ranges] of Object.entries(articleChecks)) {
  const manual = read(`content/la-puebla/tema-${String(themeNumber).padStart(2, '0')}/manual.md`);
  for (const [start, end] of ranges) {
    for (let article = start; article <= end; article += 1) {
      assert.ok(
        manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`) || manual.includes(`Artículo ${article}.`),
        `Falta el artículo ${article} en el tema ${themeNumber}`
      );
    }
  }
}

const manual5 = read('content/la-puebla/tema-05/manual.md');
for (const article of [137, 140, 141, 142]) {
  assert.ok(manual5.includes(`Artículo ${article} `) || manual5.includes(`Artículo ${article} ·`));
}
for (const [start, end] of [[11, 41], [46, 54], [176, 200], [202, 209]]) {
  for (let article = start; article <= end; article += 1) {
    assert.ok(
      manual5.includes(`Artículo ${article} `) || manual5.includes(`Artículo ${article} ·`) || manual5.includes(`Artículo ${article}.`),
      `Falta el artículo ${article} en el tema 5`
    );
  }
}

const manual6 = read('content/la-puebla/tema-06/manual.md');
const matrix6 = json('content/la-puebla/tema-06/matriz.json');
const questions6 = json('content/la-puebla/tema-06/preguntas.json');
const approval6 = read('content/la-puebla/tema-06/aprobacion.md');

assert.equal(matrix6.estado, 'APROBADO_USUARIO');
assert.equal(matrix6.aprobadoEl, '2026-07-17');
assert.equal(matrix6.cobertura.length, 6);
assert.equal(questions6.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.ok(approval6.includes('«Tema 6 aprobado»'));
assert.ok(manual6.includes('Publicación como aprobado: **SÍ**'));
assert.ok(manual6.includes('Materia deliberadamente excluida del núcleo'));
assert.ok(manual6.split('\n').length > 650, 'El manual del tema 6 parece truncado');
assert.ok(manual6.includes('Artículo 19 '), 'Falta el artículo 19 sobre oferta de empleo público');

for (const marker of [
  'cuatro años',
  'seis meses dentro de un periodo de doce meses',
  'diez por ciento adicional',
  'plazo improrrogable de **tres años**',
  'siete por ciento',
  'dos por ciento',
  'número impar',
  'al menos cinco miembros',
  'dos años de servicio activo',
  'concurso-oposición',
  'tres y cinco tramos',
  'Ley 2/2026',
  '6 de mayo de 2026',
  'artículo 70.2',
  'violencia de género',
  'movilidad voluntaria entre Administraciones'
]) assert.ok(manual6.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 6: ${marker}`);

assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.6.0'"));

for (const number of [1, 2, 3, 4, 5, 6]) {
  const folder = `tema-${String(number).padStart(2, '0')}`;
  for (const file of ['manual.md', 'matriz.json', 'aprobacion.md', 'preguntas.json']) {
    assert.ok(serviceWorker.includes(`./content/la-puebla/${folder}/${file}`), `La PWA debe incluir ${folder}/${file}`);
  }
}

const forbiddenFiles = [
  'assets/js/puebla-v68.js',
  'assets/js/ui-v90-pedagogia.js',
  'assets/js/asset-manifest-v83.js',
  'data/oposiciones.js',
  '.github/workflows/apply-t05-approval.yml',
  '.github/workflows/apply-t06-approval.yml'
];
for (const path of forbiddenFiles) assert.equal(fs.existsSync(path), false, `No debe existir el archivo ${path}`);

console.log(JSON.stringify({
  project: programme.project,
  version: programme.version,
  officialThemes: programme.temas.length,
  userApprovedThemes: approved.length,
  themesInUserReview: inReview.length,
  pendingThemes: pending.length,
  theme6Questions: questions6.preguntas.length,
  theme6ManualLines: manual6.split('\n').length,
  status: 'TEMA_6_APROBADO_VALIDADO'
}, null, 2));