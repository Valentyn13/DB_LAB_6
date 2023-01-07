/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "befef4f7eda017e5d67c3d8f72a759d5"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e006b512.css",
    "revision": "ea82612ee34ff217cae20ee8e6ebac3e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e3053f2d.js",
    "revision": "cee0c0c4b7f97f7f8e49ad9ccfe6213a"
  },
  {
    "url": "assets/js/11.b9dde3ce.js",
    "revision": "656a5ed610b75f3eb2c728cca996f75f"
  },
  {
    "url": "assets/js/12.38309e17.js",
    "revision": "535aed542baecbd18a2a92ae9deda23d"
  },
  {
    "url": "assets/js/13.4ad5c7a2.js",
    "revision": "ad620f4f644d8b3f89254d29f5a61ff4"
  },
  {
    "url": "assets/js/14.a1b6aaae.js",
    "revision": "5be6e471069160c7be6d235d488d6cc5"
  },
  {
    "url": "assets/js/15.12a3f435.js",
    "revision": "918b0d76f1a729a94419e108ecc658b3"
  },
  {
    "url": "assets/js/16.2b14d568.js",
    "revision": "c29e8ca7f925cee39374d5a8b693c34e"
  },
  {
    "url": "assets/js/17.1e43b37d.js",
    "revision": "04bd7a1f77fe44e1ea1844c19793cb48"
  },
  {
    "url": "assets/js/18.d26aecda.js",
    "revision": "52e8e922925582beaaf9388a9ce97d94"
  },
  {
    "url": "assets/js/19.4c5a4109.js",
    "revision": "dd6041702603b4c0a4725d98e2feff32"
  },
  {
    "url": "assets/js/2.4c8f18e9.js",
    "revision": "506c7a9347208a10acc8011add425824"
  },
  {
    "url": "assets/js/20.4b63ce71.js",
    "revision": "6225f96f311f53eac7dc08dc2cf11360"
  },
  {
    "url": "assets/js/21.4d9eafe9.js",
    "revision": "859c1e4ba71b889d355b15a731033a23"
  },
  {
    "url": "assets/js/22.42e6baa9.js",
    "revision": "b11f09d68e71c8dedafe22458784cdba"
  },
  {
    "url": "assets/js/23.e8b58770.js",
    "revision": "cde306c18e0ff047c39d419e981e1de8"
  },
  {
    "url": "assets/js/24.9eb16dee.js",
    "revision": "2999da20a4bf6f8176cda333e8bff51a"
  },
  {
    "url": "assets/js/26.6eebb66c.js",
    "revision": "c3a04e9016b9d59bd232297f93899973"
  },
  {
    "url": "assets/js/3.266de04a.js",
    "revision": "d7e713d08ae811869d3b730fe64d3102"
  },
  {
    "url": "assets/js/4.59a2c039.js",
    "revision": "8167764f3efe316255f0758f41ce09f4"
  },
  {
    "url": "assets/js/5.ab9cf220.js",
    "revision": "ef7e1aae501b9185c97e349366c5ae60"
  },
  {
    "url": "assets/js/6.efd0428a.js",
    "revision": "b2b88a5e641683dabda5924051d99a1a"
  },
  {
    "url": "assets/js/7.6162a64d.js",
    "revision": "19cab67c43277dc11bfc9ea3a5a204ba"
  },
  {
    "url": "assets/js/8.dd761899.js",
    "revision": "3884c779bf54674045677b9361dec721"
  },
  {
    "url": "assets/js/9.5fec2574.js",
    "revision": "75ca770c5dbd671d6e9dad2296fd20a8"
  },
  {
    "url": "assets/js/app.d827471d.js",
    "revision": "eb49c753a4ecfd25099dda0a23b2579c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d498bf944ac5c5221be98176def1b619"
  },
  {
    "url": "design/index.html",
    "revision": "0365911e4450a5df20122ecbfed19e2a"
  },
  {
    "url": "index.html",
    "revision": "669fdc7017ec81dd53f76ea107bce559"
  },
  {
    "url": "intro/index.html",
    "revision": "e026328f237bdc1c645982cc63ff9897"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c901ec4fad23153de36f4b9f9d14572a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "314d829297cb5c61e99990e86c536a5e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6a2af70f8483f71d53f00ffc68f02442"
  },
  {
    "url": "software/index.html",
    "revision": "f4039eb258d8939ebbc399bd5cbccca4"
  },
  {
    "url": "test/index.html",
    "revision": "2cd28702f69ff30d54187b6fc89c19f2"
  },
  {
    "url": "use cases/index.html",
    "revision": "6babe2bb3bbeb1630a928f0fbf1fb3f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
