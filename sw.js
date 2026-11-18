// Hotfix de recuperación: OpoWeb deja de usar service worker temporalmente.
// Este archivo solo sustituye instalaciones antiguas, limpia sus cachés y se da
// de baja. No intercepta navegaciones ni recursos.

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Durante activate el worker todavía es válido para reclamar clientes.
    await self.clients.claim();

    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));

    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of windows) {
      client.postMessage({ type: 'OPOWEB_SW_DISABLED' });
    }

    // Se da de baja al final para no provocar InvalidStateError.
    await self.registration.unregister();
  })());
});

// Sin listener fetch: todas las peticiones pasan directamente por el navegador.
