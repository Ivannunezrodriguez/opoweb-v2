const CACHE = 'opoweb-v2-0.20.1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/styles.css',
  './assets/app.js',
  './assets/icon.svg',
  './data/programa.json',
  './data/seguimiento-la-puebla.json',
  './content/la-puebla/supuestos-practicos.json'
];

async function themeAssets() {
  try {
    const response = await fetch('./data/programa.json', { cache: 'no-cache' });
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
    });
    return [...paths];
  } catch (_) {
    return [];
  }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE_ASSETS);
    const optionalAssets = await themeAssets();
    await Promise.allSettled(optionalAssets.map(path => cache.add(path)));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
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