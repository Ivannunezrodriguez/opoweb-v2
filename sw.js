const CACHE = 'opoweb-v2-0.12.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/styles.css',
  './assets/app.js',
  './assets/icon.svg',
  './data/programa.json',
  './content/la-puebla/tema-01/manual.md',
  './content/la-puebla/tema-01/matriz.json',
  './content/la-puebla/tema-01/aprobacion.md',
  './content/la-puebla/tema-01/preguntas.json',
  './content/la-puebla/tema-02/manual.md',
  './content/la-puebla/tema-02/matriz.json',
  './content/la-puebla/tema-02/aprobacion.md',
  './content/la-puebla/tema-02/preguntas.json',
  './content/la-puebla/tema-03/manual.md',
  './content/la-puebla/tema-03/matriz.json',
  './content/la-puebla/tema-03/aprobacion.md',
  './content/la-puebla/tema-03/preguntas.json',
  './content/la-puebla/tema-04/manual.md',
  './content/la-puebla/tema-04/matriz.json',
  './content/la-puebla/tema-04/aprobacion.md',
  './content/la-puebla/tema-04/preguntas.json',
  './content/la-puebla/tema-05/manual.md',
  './content/la-puebla/tema-05/matriz.json',
  './content/la-puebla/tema-05/aprobacion.md',
  './content/la-puebla/tema-05/preguntas.json',
  './content/la-puebla/tema-06/manual.md',
  './content/la-puebla/tema-06/matriz.json',
  './content/la-puebla/tema-06/aprobacion.md',
  './content/la-puebla/tema-06/preguntas.json',
  './content/la-puebla/tema-07/manual.md',
  './content/la-puebla/tema-07/matriz.json',
  './content/la-puebla/tema-07/aprobacion.md',
  './content/la-puebla/tema-07/preguntas.json',
  './content/la-puebla/tema-08/manual.md',
  './content/la-puebla/tema-08/matriz.json',
  './content/la-puebla/tema-08/aprobacion.md',
  './content/la-puebla/tema-08/preguntas.json',
  './content/la-puebla/tema-08/articulos.md',
  './content/la-puebla/tema-09/manual.md',
  './content/la-puebla/tema-09/matriz.json',
  './content/la-puebla/tema-09/aprobacion.md',
  './content/la-puebla/tema-09/preguntas.json',
  './content/la-puebla/tema-09/articulos.md',
  './content/la-puebla/tema-10/manual.md',
  './content/la-puebla/tema-10/matriz.json',
  './content/la-puebla/tema-10/aprobacion.md',
  './content/la-puebla/tema-10/preguntas.json',
  './content/la-puebla/tema-10/articulos.md',
  './content/la-puebla/tema-11/manual.md',
  './content/la-puebla/tema-11/matriz.json',
  './content/la-puebla/tema-11/aprobacion.md',
  './content/la-puebla/tema-11/preguntas.json',
  './content/la-puebla/tema-11/bloque-01-voluntaria.md',
  './content/la-puebla/tema-11/bloque-02-aplazamiento-compensacion.md',
  './content/la-puebla/tema-11/bloque-03a-devoluciones-regimen.md',
  './content/la-puebla/tema-11/bloque-03b-devoluciones-procedimiento.md',
  './content/la-puebla/tema-11/bloque-04a-ejecutiva-providencia.md',
  './content/la-puebla/tema-11/bloque-05-embargo.md',
  './content/la-puebla/tema-11/articulos.md',
  './content/la-puebla/tema-11/articulos-lgt.md',
  './content/la-puebla/tema-11/articulos-rgr.md',
  './content/la-puebla/tema-11/articulos-rgr-deuda.md',
  './content/la-puebla/tema-11/articulos-rgr-apremio.md',
  './content/la-puebla/tema-12/manual.md',
  './content/la-puebla/tema-12/matriz.json',
  './content/la-puebla/tema-12/aprobacion.md',
  './content/la-puebla/tema-12/preguntas.json',
  './content/la-puebla/tema-12/articulos.md',
  './content/la-puebla/tema-12/bloque-01-normas-generales.md',
  './content/la-puebla/tema-12/bloque-02-ibi.md',
  './content/la-puebla/tema-12/bloque-03-iae.md',
  './content/la-puebla/tema-12/bloque-04-ivtm.md',
  './content/la-puebla/tema-12/bloque-04a-ivtm-hecho.md',
  './content/la-puebla/tema-12/bloque-04b-ivtm-sujeto.md',
  './content/la-puebla/tema-12/bloque-05-iivtnu.md',
  './content/la-puebla/tema-12/bloque-05a-iivtnu-hecho.md',
  './content/la-puebla/tema-12/bloque-05b-iivtnu-sujetos.md'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
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
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
