import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

// Cobertura documental sin convertir la presencia del fichero en aprobación jurídica.
const programme = JSON.parse(readFileSync('data/programa.json', 'utf8'));
const literaryTopics = programme.temas.filter(theme => theme.numero >= 1 && theme.numero <= 14);
assert.equal(literaryTopics.length, 14);

for (const theme of literaryTopics) {
  assert.ok(theme.fuentes, 'Faltan referencias de fuentes del tema ' + theme.numero);
  assert.ok(existsSync(theme.fuentes), 'Fichero de fuentes inexistente: ' + theme.fuentes);
  const markdown = readFileSync(theme.fuentes, 'utf8');
  assert.match(markdown, /^#\s+/m, 'Título de fuentes del tema ' + theme.numero);
  assert.match(markdown, /BOE-A-|DOUE-L-/, 'Falta referencia normativa oficial tema ' + theme.numero);
  assert.match(markdown, /02\/11\/2026|2 de noviembre de 2026/i, 'Falta fecha de corte de fuentes tema ' + theme.numero);
  assert.match(markdown, /Pendiente|pendiente|no.*certificad|no.*recertificad|Restan\s+\*\*pruebas funcionales/i, 'Falta indicar alcance de revisión del tema ' + theme.numero);
}

// El visor debe permitir consultar las fuentes oficiales sin abandonar el tema.
const app = readFileSync('assets/app.js', 'utf8');
assert.match(app, /async function loadSources\(theme\)/);
assert.match(app, /theme\.fuentes/);
assert.match(app, /fetchWithTimeout\(theme\.fuentes,/);
assert.match(app, /renderMarkdown\(sources\)/);
assert.match(app, /id="sources-slot"/);
assert.match(app, /loadSources\(theme\);/);
console.log('LA_PUEBLA_14_TEMAS_FUENTES_VINCULADAS_Y_VISOR_OK');
