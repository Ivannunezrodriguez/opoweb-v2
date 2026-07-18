import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const exists = p => fs.existsSync(p);

const programme = json('data/programa.json');
const packageJson = json('package.json');
const serviceWorker = read('sw.js');
const index = read('index.html');

assert.equal(programme.version, '0.17.0');
assert.equal(packageJson.version, '0.17.0');
assert.ok(index.includes('v0.17.0'));
assert.equal(programme.temas.length, 19);

const approved = programme.temas.filter(t => t.estado === 'APROBADO_USUARIO');
const review = programme.temas.filter(t => t.estado === 'EN_REVISION_USUARIO');
const pending = programme.temas.filter(t => t.estado === 'PENDIENTE_RECONSTRUCCION');
assert.deepEqual(approved.map(t => t.numero), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
assert.equal(review.length, 0);
assert.deepEqual(pending.map(t => t.numero), [18,19]);
assert.ok(programme.temas.slice(17).every(t => !t.manual));

for (const t of approved) {
  assert.ok(exists(t.manual));
  assert.ok(exists(t.matriz));
  assert.ok(exists(t.preguntas));
  assert.equal(json(t.matriz).estado, 'APROBADO_USUARIO');
  assert.deepEqual(json(t.preguntas).preguntas, []);
}

const t17 = programme.temas[16];
const base17 = 'content/la-puebla/tema-17';
const matrix17 = json(`${base17}/matriz.json`);
const questions17 = json(`${base17}/preguntas.json`);
assert.equal(t17.capitulos.length, 5);
assert.equal(t17.aprobadoEl, '2026-07-18');
assert.equal(t17.aprobacion, `${base17}/aprobacion.md`);
assert.equal(matrix17.estado, 'APROBADO_USUARIO');
assert.equal(matrix17.aprobadoEl, '2026-07-18');
assert.equal(matrix17.cobertura.length, 5);
assert.equal(matrix17.atajosComparados.length, 12);
assert.equal(matrix17.diferenciasClave.length, 5);
assert.equal(questions17.estado, 'PENDIENTE_REVISION_POST_APROBACION');
assert.deepEqual(questions17.preguntas, []);
assert.ok(read(`${base17}/manual.md`).includes('Tema cerrado: **SÍ**'));
assert.ok(read(`${base17}/aprobacion.md`).includes('Tema 17 aprobado'));
assert.ok(read(`${base17}/feedback.md`).includes('APROBADO_USUARIO'));
assert.ok(read(`${base17}/fuentes.md`).includes('APROBADO POR EL USUARIO'));

const files17 = [
  'manual.md','matriz.json','aprobacion.md','feedback.md','preguntas.json','fuentes.md',
  'bloque-01-entorno-formatos.md','bloque-02-edicion-busqueda.md',
  'bloque-03-formato-estilos.md','bloque-04-paginas-objetos.md',
  'bloque-05-revision-salida.md'
];
for (const file of files17) {
  assert.ok(exists(`${base17}/${file}`), `Falta ${file}`);
  assert.ok(serviceWorker.includes(`./${base17}/${file}`), `No precargado ${file}`);
}

const joined17 = files17.filter(f => f.endsWith('.md')).map(f => read(`${base17}/${f}`)).join('\n').toLowerCase();
for (const term of [
  'microsoft word','libreoffice writer','docx','odt','guardar como','formato directo',
  'estilos de página','saltos de sección','vincular al anterior','combinación de correspondencia',
  'control de cambios','exportar a pdf','texto alternativo','navegador'
]) {
  assert.ok(joined17.includes(term), `Falta ${term}`);
}
for (const source of [
  'Métodos abreviados de teclado de Word','Atajos de teclado para LibreOffice Writer',
  'Funcionalidades de LibreOffice Writer','Combinar correspondencia','Exportar a PDF'
]) {
  assert.ok(read(`${base17}/fuentes.md`).includes(source), `Falta fuente ${source}`);
}

assert.ok(serviceWorker.includes("const CACHE = 'opoweb-v2-0.17.0'"));
assert.equal(exists('.github/workflows/apply-t17-approval.yml'), false);
assert.equal(exists('scripts/publish_t17.py'), false);

console.log(JSON.stringify({
  version: programme.version,
  approved: approved.length,
  review: review.length,
  pending: pending.length,
  theme17Questions: questions17.preguntas.length,
  status: 'TEMA_17_APROBADO_VALIDADO'
}, null, 2));
