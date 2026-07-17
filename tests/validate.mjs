import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const exists = path => fs.existsSync(path);

const programme = json('data/programa.json');
const rules = read('PROJECT_RULES.md');
const app = read('assets/app.js');
const serviceWorker = read('sw.js');
const index = read('index.html');
const packageJson = json('package.json');

assert.equal(programme.project, 'opoweb-v2');
assert.equal(programme.version, '0.10.0');
assert.equal(packageJson.version, '0.10.0');
assert.ok(index.includes('v0.10.0'));
assert.equal(programme.temas.length, 19);
assert.deepEqual(
  programme.temas.map(item => item.numero),
  Array.from({ length: 19 }, (_, index) => index + 1)
);

const approved = programme.temas.filter(item => item.estado === 'APROBADO_USUARIO');
const inReview = programme.temas.filter(item => item.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(item => item.estado === 'PENDIENTE_RECONSTRUCCION');

assert.deepEqual(approved.map(item => item.numero), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.ok(approved.every(item => item.aprobadoEl === '2026-07-17'));
assert.deepEqual(inReview, []);
assert.equal(pending.length, 9, 'Los temas 11-19 deben permanecer pendientes');
assert.ok(programme.temas.slice(10).every(item => !item.manual && !item.preguntas));

const expectedRows = { 1: 6, 2: 5, 3: 9, 4: 7, 5: 8, 6: 6, 7: 7, 8: 8, 9: 8, 10: 8 };

for (const theme of approved) {
  const folder = `tema-${String(theme.numero).padStart(2, '0')}`;
  const base = `content/la-puebla/${folder}`;
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

  for (const file of ['manual.md', 'matriz.json', 'aprobacion.md', 'preguntas.json']) {
    assert.ok(serviceWorker.includes(`./content/la-puebla/${folder}/${file}`));
  }
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
        manual.includes(`Artículo ${article} `) ||
        manual.includes(`Artículo ${article} ·`) ||
        manual.includes(`Artículo ${article}.`),
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
      manual5.includes(`Artículo ${article} `) ||
      manual5.includes(`Artículo ${article} ·`) ||
      manual5.includes(`Artículo ${article}.`)
    );
  }
}

const manual8 = read('content/la-puebla/tema-08/manual.md');
const articles8 = read('content/la-puebla/tema-08/articulos.md');
const organicHeading = '## Ley Orgánica 3/2007';
assert.ok(articles8.includes(organicHeading));
const [regionalArticles, organicArticles] = articles8.split(organicHeading);
for (let article = 1; article <= 65; article += 1) {
  assert.ok(regionalArticles.includes(`| ${article} |`));
}
for (let article = 1; article <= 78; article += 1) {
  assert.ok(organicArticles.includes(`| ${article} |`));
}
for (const marker of ['discriminación directa', 'transversalidad', '40 %', '60 %', '50 o más personas trabajadoras']) {
  assert.ok(manual8.toLowerCase().includes(marker.toLowerCase()));
}

const manual9 = read('content/la-puebla/tema-09/manual.md');
const articles9 = read('content/la-puebla/tema-09/articulos.md');
for (let article = 1; article <= 97; article += 1) {
  assert.ok(articles9.includes(`| ${article} |`));
}
assert.ok(articles9.includes('| 53 bis |'));
for (const marker of ['14 años', '72 horas', 'Delegado de Protección de Datos', 'artículo 77', 'desconexión digital']) {
  assert.ok(manual9.toLowerCase().includes(marker.toLowerCase()));
}
assert.ok(serviceWorker.includes('./content/la-puebla/tema-08/articulos.md'));
assert.ok(serviceWorker.includes('./content/la-puebla/tema-09/articulos.md'));

const theme10 = programme.temas[9];
const base10 = 'content/la-puebla/tema-10';
const manual10 = read(`${base10}/manual.md`);
const matrix10 = json(`${base10}/matriz.json`);
const questions10 = json(`${base10}/preguntas.json`);
const approval10 = read(`${base10}/aprobacion.md`);
const articles10 = read(`${base10}/articulos.md`);

assert.equal(theme10.estado, 'APROBADO_USUARIO');
assert.equal(theme10.aprobadoEl, '2026-07-17');
assert.equal(theme10.manual, `${base10}/manual.md`);
assert.equal(theme10.matriz, `${base10}/matriz.json`);
assert.equal(theme10.aprobacion, `${base10}/aprobacion.md`);
assert.equal(theme10.preguntas, `${base10}/preguntas.json`);
assert.equal(theme10.trazabilidad, `${base10}/articulos.md`);
assert.equal(matrix10.tema, 10);
assert.equal(matrix10.estado, 'APROBADO_USUARIO');
assert.equal(matrix10.aprobadoEl, '2026-07-17');
assert.equal(matrix10.cobertura.length, 8);
assert.equal(matrix10.trazabilidadArticuloPorArticulo, `${base10}/articulos.md`);
assert.equal(questions10.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions10.preguntas, []);
assert.ok(approval10.includes('«Tema 10 aprobado»'));
assert.ok(approval10.includes('17 de julio de 2026'));
assert.ok(manual10.includes('**Estado:** APROBADO POR EL USUARIO'));
assert.ok(manual10.includes('Tema cerrado: **SÍ, aprobado por el usuario**'));
assert.ok(manual10.includes('Publicación como aprobado: **SÍ**'));
assert.ok(manual10.split('\n').length > 500, 'El manual del tema 10 parece truncado');
assert.ok(articles10.includes('**Estado:** APROBADO POR EL USUARIO'));

for (let article = 6; article <= 12; article += 1) {
  assert.ok(articles10.includes(`| ${article} |`), `Falta TRLRHL ${article}`);
}
for (const [rangeStart, rangeEnd] of [[17, 48], [58, 76], [117, 140]]) {
  for (let article = rangeStart; article <= rangeEnd; article += 1) {
    assert.ok(articles10.includes(`| ${article} |`), `Falta trazabilidad LGT ${article}`);
  }
}
assert.ok(articles10.includes('| 29 bis |'));

for (const marker of [
  'hasta el **5 % de la cuota**',
  'Acuerdo del Pleno',
  'aceptación',
  'publicación',
  'recargo del **1 %**',
  'ejecutivo: **5 %**',
  'apremio reducido: **10 %**',
  'apremio ordinario: **20 %**',
  '**Cuatro años**',
  'día 20 del mes siguiente',
  'día 5 del segundo mes siguiente',
  'comprobación limitada',
  'tasación pericial contradictoria',
  '3 de junio de 2026',
  '21 de diciembre de 2024'
]) {
  assert.ok(manual10.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico del tema 10: ${marker}`);
}
assert.ok(serviceWorker.includes('./content/la-puebla/tema-10/articulos.md'));

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.10.0'"));
assert.ok(rules.includes('Te prometí un manual y publiqué resúmenes inflados por métricas'));
assert.ok(rules.includes('Un tema solo cambia a `APROBADO_USUARIO`'));
assert.ok(app.includes("const PROGRAM_URL = 'data/programa.json'"));
assert.ok(app.includes("theme.estado !== 'APROBADO_USUARIO'"));

const forbiddenFiles = [
  'assets/js/puebla-v68.js',
  'assets/js/ui-v90-pedagogia.js',
  'assets/js/asset-manifest-v83.js',
  'data/oposiciones.js',
  '.github/workflows/apply-t05-approval.yml',
  '.github/workflows/apply-t06-approval.yml',
  '.github/workflows/apply-t07-approval.yml',
  '.github/workflows/apply-t08-approval.yml',
  '.github/workflows/apply-t09-approval.yml',
  '.github/workflows/apply-t10-approval.yml'
];
for (const path of forbiddenFiles) assert.equal(exists(path), false, `No debe existir el archivo ${path}`);

console.log(JSON.stringify({
  project: programme.project,
  version: programme.version,
  officialThemes: programme.temas.length,
  userApprovedThemes: approved.length,
  themesInUserReview: inReview.length,
  pendingThemes: pending.length,
  theme10Questions: questions10.preguntas.length,
  theme10ManualLines: manual10.split('\n').length,
  status: 'TEMA_10_APROBADO_VALIDADO'
}, null, 2));
