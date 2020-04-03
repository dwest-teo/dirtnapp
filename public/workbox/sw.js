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

importScripts(
  '/static/workbox/workbox-v3.4.1/workbox-sw.js',
  '/static/workbox/workbox-v3.4.1/workbox-sw.js',
  '/static/workbox/next-precache-manifest-b2dc66ed403b810de1182d2c5cc6e9a8.js',
  '/static/workbox/next-precache-manifest-b2dc66ed403b810de1182d2c5cc6e9a8.js'
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.(gif|png|gltf|bin|jpe?g|svg|ico)$/i,
  workbox.strategies.cacheFirst(),
  'GET'
);
workbox.routing.registerRoute(/\.js$/i, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(
  /\/sw\.js$/g,
  workbox.strategies.networkOnly(),
  'GET'
);
