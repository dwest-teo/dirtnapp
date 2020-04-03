(this.workbox = this.workbox || {}),
  (this.workbox.strategies = (function(e, t, r) {
    'use strict';
    try {
      self.workbox.v['workbox:strategies:3.4.1'] = 1;
    } catch (e) {}
    class s {
      constructor(t = {}) {
        (this.e = e.cacheNames.getRuntimeName(t.cacheName)),
          (this.t = t.plugins || []),
          (this.r = t.fetchOptions || null),
          (this.s = t.matchOptions || null);
      }
      handle({ event: e }) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          return t.makeRequest({ event: e, request: e.request });
        })();
      }
      makeRequest({ event: e, request: r }) {
        var s = this;
        return babelHelpers.asyncToGenerator(function*() {
          'string' == typeof r && (r = new Request(r));
          let n,
            i = yield t.cacheWrapper.match(s.e, r, s.s, s.t);
          if (!i)
            try {
              i = yield s.n(r, e);
            } catch (e) {
              n = e;
            }
          if (n) throw n;
          return i;
        })();
      }
      n(e, s) {
        var n = this;
        return babelHelpers.asyncToGenerator(function*() {
          const i = yield r.fetchWrapper.fetch(
              e,
              n.r,
              n.t,
              s ? s.preloadResponse : void 0
            ),
            l = i.clone(),
            u = t.cacheWrapper.put(n.e, e, l, n.t);
          if (s)
            try {
              s.waitUntil(u);
            } catch (e) {}
          return i;
        })();
      }
    }
    class n {
      constructor(t = {}) {
        (this.e = e.cacheNames.getRuntimeName(t.cacheName)),
          (this.t = t.plugins || []),
          (this.s = t.matchOptions || null);
      }
      handle({ event: e }) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          return t.makeRequest({ event: e, request: e.request });
        })();
      }
      makeRequest({ event: e, request: r }) {
        var s = this;
        return babelHelpers.asyncToGenerator(function*() {
          return (
            'string' == typeof r && (r = new Request(r)),
            yield t.cacheWrapper.match(s.e, r, s.s, s.t)
          );
        })();
      }
    }
    var i = {
      cacheWillUpdate: ({ response: e }) => (e.ok || 0 === e.status ? e : null),
    };
    class l {
      constructor(t = {}) {
        if (((this.e = e.cacheNames.getRuntimeName(t.cacheName)), t.plugins)) {
          let e = t.plugins.some(e => !!e.cacheWillUpdate);
          this.t = e ? t.plugins : [i, ...t.plugins];
        } else this.t = [i];
        (this.i = t.networkTimeoutSeconds),
          (this.r = t.fetchOptions || null),
          (this.s = t.matchOptions || null);
      }
      handle({ event: e }) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          return t.makeRequest({ event: e, request: e.request });
        })();
      }
      makeRequest({ event: e, request: t }) {
        var r = this;
        return babelHelpers.asyncToGenerator(function*() {
          const s = [];
          'string' == typeof t && (t = new Request(t));
          const n = [];
          let i;
          if (r.i) {
            const { id: e, promise: l } = r.l(t, s);
            (i = e), n.push(l);
          }
          const l = r.u(i, e, t, s);
          n.push(l);
          let u = yield Promise.race(n);
          return u || (u = yield l), u;
        })();
      }
      l(e, t) {
        var r = this;
        let s;
        var n;
        return {
          promise: new Promise(t => {
            const i = ((n = babelHelpers.asyncToGenerator(function*() {
              t(yield r.o(e));
            })),
            function() {
              return n.apply(this, arguments);
            });
            s = setTimeout(i, 1e3 * this.i);
          }),
          id: s,
        };
      }
      u(e, s, n, i) {
        var l = this;
        return babelHelpers.asyncToGenerator(function*() {
          let i, u;
          try {
            u = yield r.fetchWrapper.fetch(
              n,
              l.r,
              l.t,
              s ? s.preloadResponse : void 0
            );
          } catch (e) {
            i = e;
          }
          if ((e && clearTimeout(e), i || !u)) u = yield l.o(n);
          else {
            const e = u.clone(),
              r = t.cacheWrapper.put(l.e, n, e, l.t);
            if (s)
              try {
                s.waitUntil(r);
              } catch (e) {}
          }
          return u;
        })();
      }
      o(e) {
        return t.cacheWrapper.match(this.e, e, this.s, this.t);
      }
    }
    class u {
      constructor(t = {}) {
        (this.e = e.cacheNames.getRuntimeName(t.cacheName)),
          (this.t = t.plugins || []),
          (this.r = t.fetchOptions || null);
      }
      handle({ event: e }) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          return t.makeRequest({ event: e, request: e.request });
        })();
      }
      makeRequest({ event: e, request: t }) {
        var s = this;
        return babelHelpers.asyncToGenerator(function*() {
          let n, i;
          'string' == typeof t && (t = new Request(t));
          try {
            i = yield r.fetchWrapper.fetch(
              t,
              s.r,
              s.t,
              e ? e.preloadResponse : void 0
            );
          } catch (e) {
            n = e;
          }
          if (n) throw n;
          return i;
        })();
      }
    }
    class o {
      constructor(t = {}) {
        if (
          ((this.e = e.cacheNames.getRuntimeName(t.cacheName)),
          (this.t = t.plugins || []),
          t.plugins)
        ) {
          let e = t.plugins.some(e => !!e.cacheWillUpdate);
          this.t = e ? t.plugins : [i, ...t.plugins];
        } else this.t = [i];
        (this.r = t.fetchOptions || null), (this.s = t.matchOptions || null);
      }
      handle({ event: e }) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          return t.makeRequest({ event: e, request: e.request });
        })();
      }
      makeRequest({ event: e, request: r }) {
        var s = this;
        return babelHelpers.asyncToGenerator(function*() {
          'string' == typeof r && (r = new Request(r));
          const n = s.n(r, e);
          let i = yield t.cacheWrapper.match(s.e, r, s.s, s.t);
          if (i) {
            if (e)
              try {
                e.waitUntil(n);
              } catch (e) {}
          } else i = yield n;
          return i;
        })();
      }
      n(e, s) {
        var n = this;
        return babelHelpers.asyncToGenerator(function*() {
          const i = yield r.fetchWrapper.fetch(
              e,
              n.r,
              n.t,
              s ? s.preloadResponse : void 0
            ),
            l = t.cacheWrapper.put(n.e, e, i.clone(), n.t);
          if (s)
            try {
              s.waitUntil(l);
            } catch (e) {}
          return i;
        })();
      }
    }
    var c = Object.freeze({
      CacheFirst: s,
      CacheOnly: n,
      NetworkFirst: l,
      NetworkOnly: u,
      StaleWhileRevalidate: o,
    });
    const a = {
        cacheFirst: s,
        cacheOnly: n,
        networkFirst: l,
        networkOnly: u,
        staleWhileRevalidate: o,
      },
      h = {};
    return (
      Object.keys(a).forEach(e => {
        h[e] = (t = {}) => {
          return new (0, a[e])(Object.assign(t));
        };
      }),
      Object.assign(h, c)
    );
  })(workbox.core._private, workbox.core._private, workbox.core._private));

//# sourceMappingURL=workbox-strategies.prod.js.map
