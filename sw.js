const cachePrefix = 'pokemon-go-event-calendar-';
const cacheName = cachePrefix + 'v1';
const base = new URL(self.registration.scope);
const index = new URL('index.html', base);
const assets = [
  'manifest.webmanifest',
  'icons/calendar-192.png',
  'icons/calendar-512.png'
].map(path => new URL(path, base).href);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll([index.href, ...assets].map(url => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(cachePrefix) && key !== cacheName)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== base.origin) return;

  if (request.mode === 'navigate' && (url.pathname === base.pathname || url.pathname === index.pathname)) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, { cache: 'no-cache' });
        if (response.ok) {
          const copy = response.clone();
          try {
            const cache = await caches.open(cacheName);
            await cache.put(index.href, copy);
          } catch {
            // A full or unavailable cache should not prevent online viewing.
          }
        }
        return response;
      } catch {
        return (await caches.match(index.href, { cacheName })) || Response.error();
      }
    })());
  } else if (assets.includes(url.href)) {
    event.respondWith((async () => (await caches.match(url.href, { cacheName })) || fetch(request))());
  }
});
