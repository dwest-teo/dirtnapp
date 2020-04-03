var workbox = (function() {
  'use strict';
  try {
    self.workbox.v['workbox:sw:3.4.1'] = 1;
  } catch (t) {}
  const t = 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1',
    e = {
      backgroundSync: 'background-sync',
      broadcastUpdate: 'broadcast-cache-update',
      cacheableResponse: 'cacheable-response',
      core: 'core',
      expiration: 'cache-expiration',
      googleAnalytics: 'google-analytics',
      navigationPreload: 'navigation-preload',
      precaching: 'precaching',
      rangeRequests: 'range-requests',
      routing: 'routing',
      strategies: 'strategies',
      streams: 'streams',
    };
  return new class {
    constructor() {
      return (
        (this.v = {}),
        (this.t = {
          debug: 'localhost' === self.location.hostname,
          modulePathPrefix: null,
          modulePathCb: null,
        }),
        (this.e = this.t.debug ? 'dev' : 'prod'),
        (this.s = !1),
        new Proxy(this, {
          get(t, s) {
            if (t[s]) return t[s];
            const o = e[s];
            return o && t.loadModule(`workbox-${o}`), t[s];
          },
        })
      );
    }
    setConfig(t = {}) {
      if (this.s)
        throw new Error(
          'Config must be set before accessing workbox.* modules'
        );
      Object.assign(this.t, t), (this.e = this.t.debug ? 'dev' : 'prod');
    }
    skipWaiting() {
      self.addEventListener('install', () => self.skipWaiting());
    }
    clientsClaim() {
      self.addEventListener('activate', () => self.clients.claim());
    }
    loadModule(t) {
      const e = this.o(t);
      try {
        importScripts(e), (this.s = !0);
      } catch (s) {
        throw (console.error(`Unable to import module '${t}' from '${e}'.`), s);
      }
    }
    o(e) {
      if (this.t.modulePathCb) return this.t.modulePathCb(e, this.t.debug);
      let s = [t];
      const o = `${e}.${this.e}.js`,
        r = this.t.modulePathPrefix;
      return (
        r &&
          '' === (s = r.split('/'))[s.length - 1] &&
          s.splice(s.length - 1, 1),
        s.push(o),
        s.join('/')
      );
    }
  }();
})();

//# sourceMappingURL=workbox-sw.js.map
