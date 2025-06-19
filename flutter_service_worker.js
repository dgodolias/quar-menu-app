'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "8b5d99314c61e7a13735d8d6565b8159",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"manifest.json": "0c2fa191cf2b313b5b527e7d3fa71fa9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"index.html": "bb4c00f3ffc44276dd909c65b27b75a3",
"/": "bb4c00f3ffc44276dd909c65b27b75a3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "edd308aa839eabde17fe1d9bae7cb2e0",
"assets/AssetManifest.bin.json": "f9c26a84c9b6d77e8e76ba9a0d3ad81b",
"assets/fonts/MaterialIcons-Regular.otf": "cbe36fc6c799013f3e6f050d7d327924",
"assets/AssetManifest.bin": "f92eedf4089e913f1699bf412b9442b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "ef28989287c6badce02b68bae9b2b41e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/cafe_logo.dart": "68b329da9893e34099c7d8ad5cb9c940",
"assets/assets/images/cafe_logo.png": "efdcf47c12b706e60d8d139b623a9387",
"assets/assets/images/sample_qr.png": "b30141c62a439025f9094ed0468d0555",
"assets/assets/images/QuaR_logo.png": "5a54488a2ef753546495b89708261f9c",
"assets/assets/data/store.json": "5cfd828cef5d25b000d8aa54962cf732",
"version.json": "c71b5af614518f10d87ede9891e273a5",
"flutter_bootstrap.js": "5b4619540a55e42fcec51759f5c4ae73",
".git/index": "8191a001da5d3f55df67c0d96d241d47",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "cfa16fd61e9b4e5a1b09dd9456f17905",
".git/refs/heads/main": "cfa16fd61e9b4e5a1b09dd9456f17905",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84bd7cb6d9eced5ea88168d9dda2e5dc",
".git/logs/refs/remotes/origin/main": "42521b2922b0302384405153321a0a76",
".git/logs/refs/heads/main": "14465f3fa1c6cc9c7ea13b5a5f254a60",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/360f6542f002d2bdf5509104d05b554a9e37c5": "03f427587449120fad23e3eea85da4ac",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/43/3552384520d6cccd1082b7be6397b5c69159a8": "74149964771ba86fc8338e113130d10b",
".git/objects/43/74b0f78a26e21bf375e7f359c579d3be673cab": "e4640a40e2c1186c5fb365241b651d5e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/39/45cd4110f613da4418ffa552222fc5f5d5958f": "06938dc7bc904736b43bb7f5c2fd4b51",
".git/objects/99/1aba1a325886189b5d44adcc8ee875e700b1d7": "8d65e7b1b5cabdc6c84683dbc0a3039c",
".git/objects/99/5a8160aec18feb07aac81c9091e3c934829654": "abb1356a2f48a93a9e6ed9f1f8b7fe75",
".git/objects/d5/3c0671f0ef16d7fc23121b0698f8dc4b02e57f": "1f243b89440e80aa91a36d719faaf169",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/bd/996ea46a21c5e39934d0d260e2c629efd4dced": "d690b769f7fc3fe96998513047abc408",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/89/1ffb230b88dec4d09e3cc490223ce5994f617c": "fcfbc786d7a9240184cb6c34efd16aef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/eb/eac5a6fa4c86e13251a7e242a0b292782f22cd": "bdc0aded50090e2ef1381bbf8e3182ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/48/5b23434c5d282b03357da8c6b0231ee7c14092": "d8733d8c1229881a0df563d2323d5620",
".git/objects/41/0a5bb3c84fbb531aa6143c90656e084d81d57f": "814e67f4601c16382577f329814decf3",
".git/objects/4b/0b0b18dd19b38fbfce804b8338025831550718": "e38d6b3fc00583f28df6e6aa1fc3f421",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/4a/023e8f6b7a386b2a14d3d97c6f9d49dce8a182": "01ba3e89a00e525a4f12ef2fc08a2afe",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f1/1c012659a3184e8d7188ef9cabbb68ec2bbf79": "a997f3adcf351bbe50d612aa73be41fc",
".git/objects/a4/4fc994ae7d3c1553acba75cc55d629fa44ef03": "3aa85f20a9ade6a938bfa1cec5f59e07",
".git/objects/52/2a5ac50a1b9cc9a73eda2b6f835e0a93d7c872": "c601919a720d38f0b3a123a420d6ec20",
".git/objects/7c/0090632b9da11338df0292de1d3c317a1f79a1": "47a9e89f5d382c3a2fa8369bb4fd194c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/27/a8205026a1d7631d5e9726d53b541035313d4d": "c577a244eb20f9467f76621bc4656511",
".git/objects/c9/7f57707ef1299b85c9680958c309ca70b1bccc": "c1f55e22eb3e603d9e6368ba3eb4a5d1",
".git/objects/45/a871f9c46cc013b48010c904dfcf6c66e6395b": "e665e822ee553d3d471205e56f04721d",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/cd/ca441d1fb228fc07407a24b6094f9a7b01f2a6": "f76ff7a101fc7e801f7dbfb86773f3bd",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/6c/fa62df299015fa884705871a53ceba8da022cc": "50b7b48d7ecab18b7b653dbc8c764a92",
".git/objects/2e/7467ff9248cc2d89e91cfecabf871f23da6fa1": "fe7c75346a5f467f9b4e692602a31214",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/33/75037a94c86fffb425c15f6aa43f7f74471ba8": "6462df68e54df76a246df2b952342c9b",
".git/objects/97/2e071cfc6aad1e43813d3d7f90c620da8ae3e4": "0e2c9d37627f0a3580a5d66711dec575",
".git/objects/55/fd990566902282986db246807ace8636b79c5c": "e5b19c668d4ff70d97f4906e95f5d224",
".git/objects/af/d3c60a2a555690c2f7af9f26cc648ba9b984c3": "62b78fc7011e064fc76f8dcf0905b9ed",
".git/config": "04b7d43907b6268fb8766f012edeba3a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/COMMIT_EDITMSG": "59f701323e57062e210c0c0168c0463c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
