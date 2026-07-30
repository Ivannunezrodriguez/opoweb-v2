const CACHE = 'opoweb-v2-0.27.22';
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

function isCacheableRequest(request) {
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
  if (!response?.ok || !isCacheableRequest(request)) return;
  try {
    await cache.put(request, response.clone());
  } catch (error) {
    console.warn('OpoWeb: recurso no cacheable', request.url, error);
  }
}

async function fetchWithTimeout(request, timeoutMs = 4500) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(request, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetchWithTimeout(request);
    await putSafely(cache, request, response);
    return response;
  } catch (_) {
    return (await cache.match(request)) || caches.match('./index.html');
  }
}

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const refresh = fetch(request)
    .then(async response => {
      await putSafely(cache, request, response);
      return response;
    })
    .catch(() => null);

  if (cached) {
    event.waitUntil(refresh);
    return cached;
  }

  return (await refresh) || caches.match('./index.html');
}

self.addEventListener('fetch', event => {
  if (!isCacheableRequest(event.request)) return;

  const url = new URL(event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request));
    return;
  }

  const contentAsset = /\.(?:js|json|md|html|css|svg)$/i.test(url.pathname);
  event.respondWith(contentAsset
    ? staleWhileRevalidate(event.request, event)
    : networkFirst(event.request));
});
