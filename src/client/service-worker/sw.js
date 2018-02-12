const CACHE_NAME = 'easy-web-cache-v1';
// const urlsToCache = [
//   '/',
//   '/demo/server-render',
//   '/static/css/bundle.css',
//   '/static/js/bundle.js'
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => (
        Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
      ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(res => {
            // invalid response
            if(!res || res.status !== 200 || res.type !== 'basic') {
              return res;
            }

            const responseToCache = res.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return res;
          });
      })
  );
});
