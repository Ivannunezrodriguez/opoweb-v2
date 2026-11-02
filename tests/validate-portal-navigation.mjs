import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pages = [
  ['index.html','index.html'],
  ['practice.html','practice.html'],
  ['radar.html','radar.html']
];
for(const [file,active] of pages){
  const html=readFileSync(file,'utf8');
  assert.match(html, /<nav class="site-nav" aria-label="Secciones de OpoWeb">/,
    'Navegación principal ausente en '+file);
  const links=[...html.matchAll(/<a href="(index\.html|practice\.html|radar\.html)"(?: aria-current="page")?>/g)];
  assert.equal(links.length,3,'Faltan enlaces entre secciones en '+file);
  for(const dest of ['index.html','practice.html','radar.html'])
    assert.ok(links.some(x=>x[1]===dest),'Enlace faltante '+dest+' en '+file);
  assert.match(html,new RegExp('<a href="'+active.replace('.','\\.')+'" aria-current="page">'),
    'Página activa no indicada en '+file);
  assert.equal((html.match(/class="nav-short"/g)||[]).length,3,
    'Faltan títulos cortos móviles en '+file);
  assert.match(html,/assets\/styles\.css\?v=0\.27\.34/,
    'La actualización visual podría quedar oculta por caché en '+file);
}
const css=readFileSync('assets/styles.css','utf8');
assert.match(css,/\.site-nav a\[aria-current="page"\]/);
assert.match(css,/\.site-nav \.nav-short \{ display:inline; \}/);
assert.match(css,/\.portal-grid \{ grid-template-columns:1fr; /);
assert.match(css,/\.portal-card \.btn \{ width:100%; \}/);
const app=readFileSync('assets/app.js','utf8');
assert.match(app,/function renderStudyAndWorkHub\(\)/);
assert.match(app,/href="radar\.html">Abrir OpoRadar<\/a>/);
assert.match(app,/function hydrateRadarPreview\(\)/);
assert.match(app,/renderStudyAndWorkHub\(\)\}\\$\{renderTracking\(\)\}/);
assert.ok(
  app.indexOf('<section class="panel intro">', app.indexOf('function renderProgramme')) <
    app.indexOf('renderStudyAndWorkHub()', app.indexOf('function renderProgramme')),
  'La introducción de la convocatoria debe aparecer antes del bloque de Radar'
);
console.log('PORTAL_NAVEGACION_RESPONSIVE_Y_RADAR_INTEGRADO_OK');
