const CACHE_NAME = "nigo-game-v66";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=66",
  "./app.js?v=66",
  "./scene-list.html",
  "./scene-list.css?v=66",
  "./scene-list.js?v=66",
  "./manifest.webmanifest",
  "./assets/scenes/v45/ipad-usm-KJ-mom-v2.jpg",
  "./assets/scenes/v45/ipad-please-KJ-mom-v2.jpg",
  "./assets/scenes/v45/milk-please-KJ-mom-v2.jpg",
  "./assets/scenes/v45/water-bottle-KJ-mom-v2.jpg",
  "./assets/scenes/v45/water-bottle-please-KJ-mom-v2.jpg",
  "./assets/scenes/v45/water-bottle-open-KJ-mom-v2.jpg",
  "./assets/scenes/v45/snack-get-KJ-mom-v2.jpg",
  "./assets/scenes/v45/snack-please-KJ-mom-v2.jpg",
  "./assets/scenes/v45/snack-open-KJ-mom-v2.jpg",
  "./assets/scenes/v45/chocolate-get-KJ-mom-v2.jpg",
  "./assets/scenes/v45/chocolate-please-KJ-mom-v2.jpg",
  "./assets/scenes/v45/chocolate-open-KJ-mom-v2.jpg",
  "./assets/scenes/v45/yogurt-get-KJ-mom-v2.jpg",
  "./assets/scenes/v45/yogurt-please-KJ-mom-v2.jpg",
  "./assets/scenes/v45/yogurt-open-KJ-mom-v2.jpg",
  "./assets/scenes/v45/ipad-want-KJ-mom-v2.jpg",
  "./assets/scenes/v45/diaper-change-KJ-mom-v2.jpg",
  "./assets/scenes/v45/toilet-go-KJ-mom-v2.jpg",
  "./assets/scenes/v57/mom-come-KJ-v1.jpg",
  "./assets/scenes/v57/mom-hug-KJ-v1.jpg",
  "./assets/scenes/v57/mom-help-KJ-v1.jpg",
  "./assets/scenes/v57/plarail-get-KJ-v1.jpg",
  "./assets/scenes/v57/tv-watch-KJ-v1.jpg",
  "./assets/scenes/v57/poop-cameout-KJ-v1.jpg",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/cards/v40/water.png",
  "./assets/cards/v40/milk.png",
  "./assets/cards/v40/ipad.png",
  "./assets/cards/v40/snack.png",
  "./assets/cards/v40/chocolate.png",
  "./assets/cards/v40/yogurt.png",
  "./assets/cards/v40/diaper.png",
  "./assets/cards/v40/toilet.png",
  "./assets/cards/v40/get.png",
  "./assets/cards/v40/please.png",
  "./assets/cards/v40/more.png",
  "./assets/cards/v40/open.png",
  "./assets/cards/v40/change.png",
  "./assets/cards/v40/go.png",
  "./assets/cards/v40/want.png",
  "./assets/cards/v57/mom.png",
  "./assets/cards/v57/plarail.png",
  "./assets/cards/v57/tv.png",
  "./assets/cards/v57/poop.png",
  "./assets/cards/v57/come.png",
  "./assets/cards/v57/hug.png",
  "./assets/cards/v57/help.png",
  "./assets/cards/v57/watch.png",
  "./assets/cards/v57/cameout.png",
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
