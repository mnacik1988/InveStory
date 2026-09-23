// Заглушка вместо воркера самой первой версии InveStory (kapital-v10-6).
// Приложение переехало на /kapital01/. Прежний воркер при активации удалял
// ВСЕ кэши домена mnacik1988.github.io — нынешнего InveStory, NeedBuy и
// Mynado. Эта версия убирает только собственные кэши kapital-* и снимает
// саму себя; перехватов запросов нет.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('kapital-')).map(k => caches.delete(k)));
    await self.registration.unregister();
  })());
});
