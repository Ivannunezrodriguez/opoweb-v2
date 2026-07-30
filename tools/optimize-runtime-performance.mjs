import fs from 'node:fs';

const appFile = 'assets/app.js';
const appOriginal = fs.readFileSync(appFile, 'utf8').replace(/\r\n/g, '\n');
let appText = appOriginal;

// No descargar ni normalizar todos los manuales al abrir el programa.
// La búsqueda inicial queda limitada a los títulos, evitando 19/40 peticiones y trabajo de CPU en segundo plano.
appText = appText.replace(
  /^\s*buildSearchIndexInBackground\(activeProgramme\);\s*$/m,
  '  // Índice completo desactivado al arrancar: evita cargar todos los manuales y bloquear el scroll.'
);

appText = appText.replace(
  'Busca en títulos al instante; el contenido se indexa en segundo plano.',
  'Busca por el título del tema. El manual se carga solo al abrirlo.'
);

if (appText !== appOriginal) {
  fs.writeFileSync(appFile, appText, 'utf8');
  console.log('Optimización de carga aplicada a assets/app.js');
}

const cssFile = 'assets/styles.css';
const cssOriginal = fs.readFileSync(cssFile, 'utf8').replace(/\r\n/g, '\n');
let cssText = cssOriginal;

cssText = cssText.replace(
  '.sticky-toolbar { position:sticky; top:.5rem; z-index:10; width:fit-content; padding:.4rem; border-radius:12px; background:color-mix(in srgb,var(--bg) 88%,transparent); backdrop-filter:blur(10px); }',
  '.sticky-toolbar { position:sticky; top:.5rem; z-index:10; width:fit-content; padding:.4rem; border-radius:12px; background:var(--bg); }'
);

if (!cssText.includes('content-visibility:auto; contain-intrinsic-size:auto 220px;')) {
  cssText = cssText.replace(
    '.manual { line-height:1.7; font-size:clamp(1rem,1.2vw,1.08rem); overflow-wrap:anywhere; }',
    '.manual { line-height:1.7; font-size:clamp(1rem,1.2vw,1.08rem); overflow-wrap:anywhere; }\n.manual > *, .question-card { content-visibility:auto; contain-intrinsic-size:auto 220px; }'
  );
}

if (cssText !== cssOriginal) {
  fs.writeFileSync(cssFile, cssText, 'utf8');
  console.log('Optimización de scroll aplicada a assets/styles.css');
}

if (appText === appOriginal && cssText === cssOriginal) {
  console.log('No hay cambios pendientes de rendimiento');
}
