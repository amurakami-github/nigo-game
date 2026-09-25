const CACHE_NAME = "futakoto-v29";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./scene-list.html",
  "./scene-list.css",
  "./manifest.webmanifest",
  "./assets/scenes/ipad-usm-keiju-v7.jpg",
  "./assets/scenes/ipad-please-keiju-v1.jpg",
  "./assets/scenes/ipad-open-keiju-v1.jpg",
  "./assets/scenes/milk-get-keiju-v1.jpg",
  "./assets/scenes/milk-please-keiju-v3.jpg",
  "./assets/scenes/milk-open-keiju-v1.jpg",
  "./assets/scenes/water-bottle-keiju-v5.jpg",
  "./assets/scenes/water-bottle-please-keiju-v1.jpg",
  "./assets/scenes/water-bottle-open-keiju-v1.jpg",
  "./assets/scenes/snack-get-keiju-v1.jpg",
  "./assets/scenes/snack-more-keiju-v4.jpg",
  "./assets/scenes/snack-open-keiju-v4.jpg",
  "./assets/scenes/chocolate-get-keiju-v1.jpg",
  "./assets/scenes/chocolate-please-keiju-v1.jpg",
  "./assets/scenes/chocolate-open-keiju-v1.jpg",
  "./assets/scenes/yogurt-get-keiju-v1.jpg",
  "./assets/scenes/yogurt-please-keiju-v2.jpg",
  "./assets/scenes/yogurt-open-keiju-v1.jpg",
  "./assets/scenes/ipad-want-keiju-v4.jpg",
  "./assets/scenes/diaper-change-keiju-v2.jpg",
  "./assets/scenes/toilet-go-keiju-v3.jpg",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/cards/diaper.svg",
  "./assets/cards/ipad-mini.svg",
  "./assets/cards/toilet.svg",
  "./assets/cards/go.svg",
  "./assets/cards/want.svg",
  "./assets/cards/water-bottle.svg",
  "./assets/cards/shrimp-cracker.svg",
  "./assets/cards/chocolate-goona.svg",
  "./assets/cards/yogurt-strawberry.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))),
  );
});
