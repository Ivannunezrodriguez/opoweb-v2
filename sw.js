const CACHE = 'opoweb-v2-0.27.24';
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
  './assets/runtime-enhancements.js',
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

function isSameOriginGet(request) {
  try {
    const url = new URL(request.url);
    return request.method === 'GET' &&
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      url.origin === self.location.origin;
  } catch (_) {
    return false;
  }
}

async function putSafely(cache, request, response) {
  if (!response?.ok || !isSameOriginGet(request)) return;
  try {
    await cache.put(request, response.clone());
  } catch (_) {}
}

async function networkFirst(request, timeoutMs = 4500) {
  const cache = await caches.open(CACHE);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(request, { signal: controller.signal });
    await putSafely(cache, request, response);
    return response;
  } catch (_) {
    return (await cache.match(request)) || caches.match('./index.html');
  } finally {
    clearTimeout(timeout);
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  await putSafely(cache, request, response);
  return response;
}

self.addEventListener('fetch', event => {
  if (!isSameOriginGet(event.request)) return;

  const url = new URL(event.request.url);

  // Los manuales y bancos deben ir directamente a red. No se interceptan para
  // evitar esperas indefinidas del service worker al abrir un tema.
  if (/\.(?:md|json)$/i.test(url.pathname) && url.pathname.includes('/content/')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request));
    return;
  }

  if (/\.(?:js|css|svg|html)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});