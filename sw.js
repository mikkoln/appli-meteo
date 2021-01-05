//https://codelabs.developers.google.com/codelabs/offline/#6 
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('cache').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'css/bootstrap.min.css',
          'css/style.css',
          'js/bootstrap.min.js',
          'js/jquery-3.5.1.min.js',
          'js/script.js',
          'img/averses-de-neige-faible.svg',
          'img/averses-de-pluie-faible.svg',
          'img/averses-de-pluie-forte.svg',
          'img/averses-de-pluie-moderee.svg',
          'img/brouillard.svg',
          'img/ciel-voile.svg',
          'img/couvert-avec-averses.svg',
          'img/developpement-nuageux.svg',
          'img/eclaircies.svg',
          'img/ensoleille.svg',
          'img/faiblement-nuageux.svg',
          'img/faiblement-orageux.svg',
          'img/faibles-passages-nuageux.svg',
          'img/fortement-nuageux.svg',
          'img/fortement-orageux.svg',
          'img/neige-faible.svg',
          'img/neige-forte.svg',
          'img/neige-moderee.svg',
          'img/nuit-avec-averses.svg',
          'img/nuit-avec-averses-de-neige-faible.svg',
          'img/nuit-avec-developpement-nuageux.svg',
          'img/nuit-bien-degage.svg',
          'img/nuit-claire.svg',
          'img/nuit-claire-et-stratus.svg',
          'img/nuit-faiblement-orageuse.svg',
          'img/nuit-legerement-voilee.svg',
          'img/nuit-nuageuse.svg',
          'img/orage-modere.svg',
          'img/pluie-et-neige-melee-faible.svg',
          'img/pluie-et-neige-melee-forte.svg',
          'img/pluie-et-neige-melee-moderee.svg',
          'img/pluie-faible.svg',
          'img/pluie-forte.svg',
          'img/pluie-moderee.svg',
          'img/stratus.svg',
          'img/stratus-se-dissipant.svg',
          'img/icon.png'
        ]);
      })
    );
   });
  
  //https://codelabs.developers.google.com/codelabs/offline/#7
  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
    caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
        })
        );
        });