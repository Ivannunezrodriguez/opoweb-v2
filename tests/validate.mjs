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
assert.equal(programme.version, '0.9.0');
assert.equal(packageJson.version, '0.9.0');
assert.ok(index.includes('v0.9.0'));
assert.equal(programme.temas.length, 19);
assert.deepEqual(programme.temas.map(item => item.numero), Array.from({ length: 19 }, (_, index) => index + 1));

const approved = programme.temas.filter(item => item.estado === 'APROBADO_USUARIO');
const inReview = programme.temas.filter(item => item.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(item => item.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(item => item.numero), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.ok(approved.every(item => item.aprobadoEl === '2026-07-17'));
assert.deepEqual(inReview, []);
assert.equal(pending.length, 10, 'Los temas 10-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(9).every(item => !item.manual && !item.preguntas));

const expectedRows = { 1: 6, 2: 5, 3: 9, 4: 7, 5: 8, 6: 6, 7: 7, 8: 8, 9: 8 };

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
  const minimumLines = [7, 9].includes(theme.numero) ? 350 : 500;
  assert.ok(manual.split('\n').length > minimumLines, `El manual del tema ${theme.numero} parece truncado`);
}

const articleChecks = {
  1: [[10, 55], [166, 169]],
  2: [[1, 33]],
  3: [[53, 105]],
  4: [[106, 126]],
  6: [[4, 15], [37, 55], [62, 82]],
  7: [[1, 4], [14, 40]]
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
    assert.ok(manual5.includes(`Artículo ${article} `) || manual5.includes(`Artículo ${article} ·`) || manual5.includes(`Artículo ${article}.`));
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
assert.ok(manual6.split('\n').length > 650);
assert.ok(manual6.includes('Artículo 19 '));

const manual7 = read('content/la-puebla/tema-07/manual.md');
const matrix7 = json('content/la-puebla/tema-07/matriz.json');
const questions7 = json('content/la-puebla/tema-07/preguntas.json');
const approval7 = read('content/la-puebla/tema-07/aprobacion.md');
assert.equal(matrix7.estado, 'APROBADO_USUARIO');
assert.equal(matrix7.aprobadoEl, '2026-07-17');
assert.equal(matrix7.cobertura.length, 7);
assert.equal(questions7.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions7.preguntas, []);
assert.ok(approval7.includes('«Tema 7 aprobado»'));
assert.ok(manual7.includes('Publicación como aprobado: **SÍ**'));
assert.ok(manual7.includes('El usuario aprobó expresamente el tema'));
assert.ok(manual7.split('\n').length > 350);

for (const marker of [
  'coste nunca recae',
  '24 horas',
  '15 días',
  'nueve meses',
  'más de **500 trabajadores**',
  'entre **250 y 500**',
  'dos disciplinas',
  'desde **50 trabajadores**',
  'trimestralmente',
  'cada doscientos días',
  'protección colectiva',
  'servicio mancomunado',
  'acompañar a técnicos e Inspección',
  '9 de abril de 2026',
  '17 de octubre de 2025'
]) assert.ok(manual7.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 7: ${marker}`);

const manual8 = read('content/la-puebla/tema-08/manual.md');
const matrix8 = json('content/la-puebla/tema-08/matriz.json');
const questions8 = json('content/la-puebla/tema-08/preguntas.json');
const approval8 = read('content/la-puebla/tema-08/aprobacion.md');
const articles8 = read('content/la-puebla/tema-08/articulos.md');
assert.equal(matrix8.tema, 8);
assert.equal(matrix8.estado, 'APROBADO_USUARIO');
assert.equal(matrix8.aprobadoEl, '2026-07-17');
assert.equal(matrix8.cobertura.length, 8);
assert.equal(matrix8.trazabilidadArticuloPorArticulo, 'content/la-puebla/tema-08/articulos.md');
assert.equal(programme.temas[7].trazabilidad, 'content/la-puebla/tema-08/articulos.md');
assert.equal(questions8.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions8.preguntas, []);
assert.ok(approval8.includes('«Tema 8 aprobado»'));
assert.ok(manual8.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual8.includes('Publicación como aprobado: **SÍ**'));
assert.ok(manual8.includes('El usuario aprobó expresamente el tema'));
assert.ok(manual8.split('\n').length > 500, 'El manual del tema 8 parece truncado');

const organicHeading = '## Ley Orgánica 3/2007';
assert.ok(articles8.includes(organicHeading), 'Falta la separación de las dos leyes');
const [regionalArticles, organicArticles] = articles8.split(organicHeading);
for (let article = 1; article <= 65; article += 1) {
  assert.ok(regionalArticles.includes(`| ${article} |`), `Falta trazabilidad del artículo ${article} de la Ley 12/2010`);
}
for (let article = 1; article <= 78; article += 1) {
  assert.ok(organicArticles.includes(`| ${article} |`), `Falta trazabilidad del artículo ${article} de la Ley Orgánica 3/2007`);
}
assert.ok(organicArticles.includes('40 %') && organicArticles.includes('60 %'));

for (const marker of [
  'discriminación directa',
  'discriminación indirecta',
  'perspectiva de género',
  'transversalidad',
  '40 %',
  '60 %',
  'cada **tres años**',
  'mayores de **60 años**',
  'apartado 4, antiguo permiso autonómico de paternidad, está **derogado**',
  'al menos **dos años**',
  '33 %',
  '50 o más personas trabajadoras',
  'artículo 51',
  'Administración General del Estado',
  '2 de agosto de 2024',
  '30 de junio de 2021'
]) assert.ok(manual8.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 8: ${marker}`);


const manual9 = read('content/la-puebla/tema-09/manual.md');
const matrix9 = json('content/la-puebla/tema-09/matriz.json');
const questions9 = json('content/la-puebla/tema-09/preguntas.json');
const approval9 = read('content/la-puebla/tema-09/aprobacion.md');
const articles9 = read('content/la-puebla/tema-09/articulos.md');
assert.equal(matrix9.tema, 9);
assert.equal(matrix9.estado, 'APROBADO_USUARIO');
assert.equal(matrix9.aprobadoEl, '2026-07-17');
assert.equal(matrix9.cobertura.length, 8);
assert.equal(programme.temas[8].trazabilidad, 'content/la-puebla/tema-09/articulos.md');
assert.equal(questions9.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions9.preguntas, []);
assert.ok(approval9.includes('«Tema 9 aprobado»'));
assert.ok(manual9.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual9.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
assert.ok(manual9.includes('Publicación como aprobado: **SÍ**'));
assert.ok(manual9.includes('27 de diciembre de 2025'));
assert.ok(manual9.toLowerCase().includes('artículo **53 bis**'));
assert.ok(manual9.split('\n').length > 350, 'El manual del tema 9 parece truncado');
assert.ok(articles9.includes('**Estado:** APROBADO POR EL USUARIO'));
for (let article = 1; article <= 97; article += 1) {
  assert.ok(articles9.includes(`| ${article} |`), `Falta trazabilidad del artículo ${article} de la LOPDGDD`);
}
assert.ok(articles9.includes('| 53 bis |'));
for (const marker of [
  '14 años',
  'un mes',
  '72 horas',
  'diez días',
  'tres meses',
  'responsable',
  'encargado',
  'Delegado de Protección de Datos',
  'artículo 77',
  'desconexión digital',
  'Reglamento (UE) 2016/679'
]) assert.ok(manual9.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 9: ${marker}`);
assert.ok(serviceWorker.includes('./content/la-puebla/tema-09/articulos.md'));

assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));
assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.9.0'"));

for (const number of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  const folder = `tema-${String(number).padStart(2, '0')}`;
  for (const file of ['manual.md', 'matriz.json', 'aprobacion.md', 'preguntas.json']) {
    assert.ok(serviceWorker.includes(`./content/la-puebla/${folder}/${file}`), `La PWA debe incluir ${folder}/${file}`);
  }
}
assert.ok(serviceWorker.includes('./content/la-puebla/tema-08/articulos.md'));

const forbiddenFiles = [
  'assets/js/puebla-v68.js',
  'assets/js/ui-v90-pedagogia.js',
  'assets/js/asset-manifest-v83.js',
  'data/oposiciones.js',
  '.github/workflows/apply-t05-approval.yml',
  '.github/workflows/apply-t06-approval.yml',
  '.github/workflows/apply-t07-approval.yml',
  '.github/workflows/apply-t08-approval.yml',
  '.github/workflows/apply-t09-approval.yml'
];
for (const path of forbiddenFiles) assert.equal(fs.existsSync(path), false, `No debe existir el archivo ${path}`);

console.log(JSON.stringify({
  project: programme.project,
  version: programme.version,
  officialThemes: programme.temas.length,
  userApprovedThemes: approved.length,
  themesInUserReview: inReview.length,
  pendingThemes: pending.length,
  theme9Questions: questions9.preguntas.length,
  theme9ManualLines: manual9.split('\n').length,
  tracedLopdgddArticles: 97,
  status: 'TEMA_9_APROBADO_VALIDADO'
}, null, 2));
