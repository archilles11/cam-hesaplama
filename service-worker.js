
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('camhesap').then(function(cache) {
      return cache.addAll([
        '/',
        '/cam_hesaplama_v1_pwa.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
