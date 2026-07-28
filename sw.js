const CACHE = 'opoweb-v2-0.27.21';
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
  './data/seguimiento-diputacion-c1.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (_) {
    return (await cache.match(request)) || caches.match('./index.html');
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const dynamicContent = event.request.mode === 'navigate' ||
    /\.(?:js|json|md|html)$/i.test(url.pathname);

  event.respondWith(dynamicContent ? networkFirst(event.request) : cacheFirst(event.request));
});
