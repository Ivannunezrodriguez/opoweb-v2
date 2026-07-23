const CACHE = 'opoweb-v2-0.27.18';
const CORE_ASSETS = [
  './',
  './index.html',
  './practice.html',
  './manifest.json',
  './assets/styles.css',
  './assets/study-progress.css',
  './assets/test-history.css',
  './assets/error-review.css',
  './assets/practice-progress.css',
  './assets/app.js',
  './assets/diputacion-tracking.js',
  './assets/study-progress.js',
  './assets/test-history.js',
  './assets/error-review.js',
  './assets/theme-test-link.js',
  './assets/test-answer-fix.js',
  './assets/practice-route.js',
  './assets/practice.js',
  './assets/practice-review.js',
  './assets/icon.svg',
  './data/programa.json',
  './data/programa-diputacion-administrativo-2026.json',
  './data/programa-uc3m-auxiliar-administrativa-2026.json',
  './data/seguimiento-la-puebla.json',
  './data/seguimiento-diputacion-c1.json',
  './content/la-puebla/supuestos-practicos.json',
  './content/la-puebla/simulacros.json',
  './content/diputacion-toledo/supuestos-practicos.json',
  './content/diputacion-toledo/simulacros.json'
];

async function programmeAssets(url, contentRoot, availableThemes) {
  try {
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) return [];
    const programme = await response.json();
    const paths = new Set();
    programme.temas.forEach(theme => {
      ['manual', 'matriz', 'aprobacion', 'preguntas', 'trazabilidad', 'feedback', 'fuentes'].forEach(key => {
        if (theme[key]) paths.add(`./${theme[key]}`);
      });
      ['capitulos', 'subcapitulos', 'trazabilidadDetallada'].forEach(key => {
        (theme[key] || []).forEach(path => paths.add(`./${path}`));
      });
      if (!theme.manual && theme.numero <= availableThemes) {
        const folder = `tema-${String(theme.numero).padStart(2, '0')}`;
        paths.add(`./${contentRoot}/${folder}/manual.md`);
        paths.add(`./${contentRoot}/${folder}/fuentes.md`);
        paths.add(`./${contentRoot}/${folder}/matriz.json`);
        paths.add(`./${contentRoot}/${folder}/preguntas.json`);
      }
    });
    return [...paths];
  } catch (_) {
    return [];
  }
}

async function optionalAssets() {
  const groups = await Promise.all([
    programmeAssets('./data/programa.json', 'content/la-puebla', 19),
    programmeAssets('./data/programa-diputacion-administrativo-2026.json', 'content/diputacion-toledo', 40),
    programmeAssets('./data/programa-uc3m-auxiliar-administrativa-2026.json', 'content/uc3m', 20)
  ]);
  return [...new Set(groups.flat())];
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE_ASSETS);
    const assets = await optionalAssets();
    await Promise.allSettled(assets.map(path => cache.add(path)));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (_) {
      return cached || caches.match('./index.html');
    }
  })());
});