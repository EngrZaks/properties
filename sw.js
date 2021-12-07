const staticCacheName = "site-static-v1";
const assets = [
  "/",
  "/index.html",
  "/assets",
  "/assets/arigo.jpg",
  "/assets/bambara.jpg",
  "/assets/close.svg",
  "/assets/logo.svg",
  "/assets/menu.svg",
  "/assets/search.svg",
  "/assets/barbounia-beans.jpg",
  "/assets/cocoabeans.jpg",
  "/assets/corn.jpg",
  "/assets/cowpea.jpg",
  "/assets/cumin.jpg",
  "/assets/grahm.jpg",
  "/assets/groundnut.jpg",
  "/assets/kidneybeans.jpg",
  "/assets/millet.jpg",
  "/assets/rice.jpg",
  "/assets/sorghums.jpg",
  "/assets/soybean.jpg",
  "/assets/barley.jpg",
  "/assets/dates.jpg",
  "/assets/fenugreek.jpg",
  "/assets/lupin.jpg",
  "/assets/sonflower-seeds.jpg",
  "/assets/wheat-grains.jpg",
  "/assets/abu_logo.png",
  "/assets/akeem.jpg",
  "/assets/zaks.jpg",
  "/assets/web.svg",
  "/scripts",
  "/scripts/properties.js",
  "/scripts/helpers.js",
  "/scripts/app.js",
  "/styles",
  "/styles/styles.css",
  "https://fonts.googleapis.com/css2?family=Gluten:wght@300&family=Roboto&family=Roboto+Condensed&family=Roboto+Slab:wght@700&display=swap",
];
// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
// When we change the name we could have multiple cache, to avoid that we need to delet the old cache, so with this function we check the key that is our cache naming, if it is different from the actual naming we delete it, in this way we will always have only the last updated cache.
// fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
