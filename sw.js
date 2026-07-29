// Service worker mínimo para que la PWA sea instalable en Android/Chrome
const CACHE = 'sanjose-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Estrategia simple: intenta la red, y si falla usa lo que haya en caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
