
// files declared for cacheing
  var filesToCache = [
    '/',

  './index.html',

  './restaurant.html',

  './css/styles.css',

  './js/dbhelper.js',

  './js/main.js',

  './js/restaurant_info.js',

  './data/restaurants.json',

  './img/1.jpg',

  './img/2.jpg',

  './img/3.jpg',

  './img/4.jpg',

  './img/5.jpg',

  './img/6.jpg',

  './img/7.jpg',

  './img/8.jpg',

  './img/9.jpg',

  './img/10.jpg',
  ];
  // cache name 
  var staticCacheName = 'pages-cache-v1';
  
  // Install process, and cacheing
  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });
 

  // This part is responsible for the offline answer. The SW respond with cached files

  self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
  
        .then(function(response) {

        
        
          return caches.open(staticCacheName).then(function(cache) {
            if (event.request.url.indexOf('test') < 0) {
              cache.put(event.request.url, response.clone());
            }
            return response;
          });
        });
  
      }).catch(function(error) {
  
       
  
      })
    );
  });

  


