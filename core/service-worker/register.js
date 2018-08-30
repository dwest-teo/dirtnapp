let isInstalling = false;

export default () => {
  if ('serviceWorker' in navigator && !isInstalling) {
    isInstalling = true;
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        if (registration.installing) {
          // eslint-disable-next-line no-console
          console.log('installing new ServiceWorker');
        }
        if (registration.active) {
          // eslint-disable-next-line no-console
          console.log(
            'ServiceWorker activated with scope: ',
            registration.scope
          );
        }
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error('Error during service worker registration:', e);
      });
  }
};
