var CACHE_NAME = 'folio-cache';
var cacheData = [
	'/index.html',
	'/app/assets/css/styles.css',
	'/app/pages/test.html',
	'/app/assets/js/index.js',
];

self.addEventListener('install', function (event)
{
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache)
			{
				return cache.addAll(cacheData);
			})
	);
});


self.addEventListener('fetch', function(event)
{
	event.respondWith(
		caches.match(event.request)
		 .then(function(response)
		 {
		 	return response ? response : fetch(event.request);
		 })
	);
});