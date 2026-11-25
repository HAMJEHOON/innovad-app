/* 설치(앱 추가)용 최소 서비스워커 — 데이터는 저장하지 않고 항상 서버에서 새로 받음 */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
