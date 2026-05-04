const CACHE_NAME = 'gs-const-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ ഫയലുകൾ ക്യാഷ് ചെയ്യുന്നു
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  console.log('Service Worker Installed');
});

// ആപ്പ് വർക്ക് ചെയ്യാൻ ഇത് അത്യാവശ്യമാണ്
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
