import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const src = readFileSync('assets/app.js', 'utf8');
const start = src.indexOf('function inlineMarkdown(');
const end = src.indexOf('function normalise(', start);
assert.ok(start >= 0 && end > start, 'No localiza el renderizador Markdown de OpoWeb');

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const { inlineMarkdown, renderMarkdown } = new Function(
  'escapeHtml', src.slice(start, end) + '\nreturn { inlineMarkdown, renderMarkdown };'
)(escapeHtml);

const sample = [
  '# Título del tema',
  '## Sección principal',
  '### Subsección',
  '#### Apartado',
  '##### Nivel adicional'
].join('\n\n');
const html = renderMarkdown(sample);
for (const [tag, title] of [
  ['h2', 'Título del tema'], ['h3', 'Sección principal'],
  ['h4', 'Subsección'], ['h5', 'Apartado'], ['h6', 'Nivel adicional']
]) {
  assert.ok(html.includes('<' + tag + '>' + title + '</' + tag + '>'),
    'Pérdida de jerarquía al renderizar ' + title);
}
assert.ok(!html.includes('<p>#####'), 'Quinto nivel Markdown renderizado como párrafo');

const nav = renderMarkdown(
  '[Primer módulo](bloque-01-conceptos-navegacion.md) ' +
  '[Fuentes del tema](fuentes.md) ' +
  '[BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565)'
);
assert.match(nav, /data-manual-file="bloque-01-conceptos-navegacion\.md"/);
assert.match(nav, /data-manual-file="fuentes\.md"/);
assert.match(nav, /href="https:\/\/www\.boe\.es\/buscar\/act\.php\?id=BOE-A-2015-10565"/);
assert.match(nav, /rel="noopener noreferrer"/, 'Enlaces externos sin protección');
const malicious = inlineMarkdown('[X](javascript:alert(1)) [Y](../privado.md) <script>alert(1)</script>');
assert.ok(!malicious.includes('href="javascript:'), 'Permite URL javascript');
assert.ok(!malicious.includes('data-manual-file="../privado.md"'), 'Permite atravesar directorios');
assert.ok(!malicious.includes('<script>'), 'HTML sin escapar');

const documentStart = src.indexOf('async function loadManualDocument(');
const documentEnd = src.indexOf('async function loadManual(', documentStart);
assert.ok(documentStart >= 0 && documentEnd > documentStart, 'No localiza cargador de módulos');
const calls = [];
const manual = { innerHTML: '' };
const loadDocument = new Function(
  'document', 'themePath', 'fetchWithTimeout', 'renderMarkdown', 'escapeHtml',
  src.slice(documentStart, documentEnd) + '\nreturn loadManualDocument;'
)(
  { querySelector: selector => selector === '#manual' ? manual : null },
  () => 'content/la-puebla/tema-16/manual.md',
  async path => { calls.push(path); return { ok: true, text: async () => '## Módulo de práctica' }; },
  renderMarkdown,
  escapeHtml
);
await loadDocument({}, 'bloque-01-conceptos-navegacion.md');
assert.deepEqual(calls, ['content/la-puebla/tema-16/bloque-01-conceptos-navegacion.md']);
assert.match(manual.innerHTML, /Volver al manual completo/);
assert.match(manual.innerHTML, /<h3>Módulo de práctica<\/h3>/);
await loadDocument({}, '../secreto.md');
await loadDocument({}, 'https://dominio.test/robo.md');
await loadDocument({}, 'manual.md');
assert.equal(calls.length, 1, 'Carga un fichero fuera del directorio del tema o no previsto');

assert.match(src, /data-manual-file/, 'El visor no delega enlaces de módulo');
assert.match(src, /event\.preventDefault\(\)/, 'Navegación del módulo no interceptada');
console.log('MANUAL_MARKDOWN_HEADINGS_H2_H6_INTERNAL_LINKS_AND_SAFE_ROUTE_OK');
