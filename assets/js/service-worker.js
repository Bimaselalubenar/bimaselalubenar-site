const CACHE_NAME = 'offline-cache';
const OFFLINE_URL = 'offline.html';
const BOOTSTRAP_CSS = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([OFFLINE_URL, BOOTSTRAP_CSS]); // Cache halaman offline dan CSS Bootstrap
        })
    );
});

self.addEventListener('fetch', function (event) {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(function () {
                return caches.match(OFFLINE_URL);
            })
        );
    } else if (event.request.url.includes('bootstrap.min.css')) {
        event.respondWith(
            caches.match(BOOTSTRAP_CSS).then(function (response) {
                return response || fetch(BOOTSTRAP_CSS);
            })
        );
    }
});
