/* 塔罗占卜 · Service Worker
   作用：把页面和图标缓存到本地，断网也能打开，装到主屏幕后秒开。 */

var CACHE = 'tarot-v3';

var ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon-180.png',
  './icons/favicon-64.png'
];

/* 安装：预缓存全部资源 */
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return c.addAll(ASSETS); })
      .then(function(){ return self.skipWaiting(); })
  );
});

/* 激活：清掉旧版本缓存 */
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* 请求拦截 */
self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;

  /* 页面导航：优先走网络（拿最新版），失败就回退到缓存的首页 */
  if (req.mode === 'navigate'){
    e.respondWith(
      fetch(req).catch(function(){ return caches.match('./index.html'); })
    );
    return;
  }

  /* 静态资源：缓存优先 */
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
