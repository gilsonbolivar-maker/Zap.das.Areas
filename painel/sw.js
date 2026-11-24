/* Service worker do Zap Painel: só a moldura com as abas. Cada área (Zap232 e
   Zap410) tem o seu próprio service worker, na sua pasta. */
'use strict';
const VERSAO = '1.1.0';
const CACHE = 'zappainel-v' + VERSAO;
const ARQUIVOS = ['.', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', ev => {
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', ev => {
  ev.waitUntil(caches.keys()
    .then(n => Promise.all(n.filter(x => x.startsWith('zappainel-v') && x !== CACHE).map(x => caches.delete(x))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', ev => {
  const url = new URL(ev.request.url);
  if (ev.request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  ev.respondWith(fetch(ev.request)
    .then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(ev.request, c)); return r; })
    .catch(() => caches.match(ev.request, { ignoreSearch: true }).then(g => g || caches.match('index.html'))));
});
