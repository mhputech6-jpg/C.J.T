const CACHE = "cjt-v2";

const URLS = [
  "/C.J.T/",
  "/C.J.T/index.html",
  "/C.J.T/manifest.json",
  "/C.J.T/icon-192.png",
  "/C.J.T/icon-512.png"
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(URLS))
  );
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
