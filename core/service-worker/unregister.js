export default () => {
  if (navigator && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(
        () =>
          navigator.serviceWorker && navigator.serviceWorker.getRegistrations()
      )
      .then(registrations => {
        if (!registrations) return Promise.resolve();
        const unregisterPromise = registrations.map(registration =>
          registration.unregister()
        );
        // eslint-disable-next-line no-console
        console.log(`unregistering ${unregisterPromise.length} workers`);
        return Promise.all(unregisterPromise);
      })
      .then(() => {
        window.caches.keys().then(cacheNames =>
          Promise.all(
            cacheNames.map(cacheName => {
              // eslint-disable-next-line no-console
              console.log(`removing ${cacheName} from cache`);
              return window.caches.delete(cacheName);
            })
          )
        );
      });
  }
};
