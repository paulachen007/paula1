/* Ask Oracle · Service Worker
   把页面、字体和图片缓存到本地，断网也能打开。 */

var CACHE = 'oracle-v4';

var ASSETS = [
  './',
  './index.html',
  './answers.js',
  './manifest.json',
  './assets/bg-ask.webp',
  './assets/bg-answer.webp',
  './assets/person-ask.webp',
  './assets/person-answer.webp',
  './assets/icon-home.svg',
  './assets/icon-share.svg',
  './assets/icon-keyboard.svg',
  './fonts/almendra-400.woff2',
  './fonts/almendra-700.woff2',
  './fonts/almendra-400-italic.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon-180.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return c.addAll(ASSETS); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate'){
    /* 网络优先拿最新版；顺便把最新版写回缓存，供断网时使用 */
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put('./index.html', copy); });
        return res;
      }).catch(function(){ return caches.match('./index.html'); })
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(function(hit){
      if (hit) return hit;
      return fetch(req).then(function(res){
        if (res && res.status === 200 && res.type === 'basic'){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
