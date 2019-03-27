self.addEventListener('install', (event) => {
  console.log('Установлен');
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => {console.log('cache opened'); console.log(cache)})
  );
});

self.addEventListener('activate', (event) => {
  console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
  console.log('Происходит запрос на сервер');
  // Как и в предыдущем примере, сначала `respondWith()` потом `waitUntil()`
  event.respondWith(fromCache(event.request));
  event.waitUntil(
    update(event.request)
    // В конце, после получения "свежих" данных от сервера уведомляем всех клиентов.
      .then(refresh)
  );
});

function fromCache(request) {
  console.log('get from cache');
  return caches.open(CACHE).then((cache) =>
    cache.match(request).then((matching) =>
      matching || Promise.reject('no-match')
    ));
}

function update(request) {
  console.log('update call');
  return caches.open(CACHE).then((cache) =>
    fetch(request).then((response) =>
      cache.put(request, response.clone()).then(() => response)
    )
  );
}