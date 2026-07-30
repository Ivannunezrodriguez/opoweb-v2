// Hotfix de recuperación: OpoWeb deja de usar service worker temporalmente.
// Al activarse, elimina las cachés antiguas y se da de baja para que todas las
// peticiones vuelvan a pasar directamente por el navegador.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
    await self.registration.unregister();
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) {
      client.postMessage({ type: 'OPOWEB_SW_DISABLED' });
    }
  })());
});

// Sin listener fetch: ninguna navegación ni recurso queda interceptado.
