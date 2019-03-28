const CACHE = 'cache-update-and-refresh-v1';
const backendUrl = 'http://localhost:8092/';
const CACHE_REQUESTS = [`${backendUrl}profile`];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => {console.log('cache opened');})
  );
});

self.addEventListener('fetch', (event) => {
  const { url } = event.request;

  if(!CACHE_REQUESTS.includes(url)) return;

  event.respondWith(fromCache(event.request));
  event.waitUntil(
    update(event.request)
      .then(refresh)
  );
});

function fromCache(request) {
  return caches.open(CACHE).then((cache) =>
    cache.match(request).then((matching) =>
      matching || Promise.reject('no-match')
    ));
}

function update(request) {
  return caches.open(CACHE).then((cache) =>
    fetch(request).then((response) => {
        cache.put(request, response.clone()).then(() => response)
      }
    )
  );
}

function refresh(response) {
  return self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      const message = {
        type: 'profile',
        action: 'updated',
      };
      client.postMessage(JSON.stringify(message));
    });
  });
}