
const CACHE = 'e3sm3-offline-final-v2';
const ASSETS = [
  "./index.html",
  "./E3SM3.html",
  "./jquery-3.6.4.min.js",
  "./jquery-ui.min.js",
  "./jquery.ui.touch-punch.min.js",
  "./loading.gif",
  "./prompts.js",
  "./g8.mp3",
  "./g1.mp3",
  "./g3.mp3",
  "./g10.mp3",
  "./g2.mp3",
  "./g7.mp3",
  "./g9.mp3",
  "./E3_E4_End.mp3",
  "./E3_SM3_Intro.mp3",
  "./E3_4_SM3_Inst.mp3",
  "./8.png",
  "./2.png",
  "./7.png",
  "./9.png",
  "./manifest.json"
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});
