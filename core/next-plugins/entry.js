const path = require('path');

module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      const entryFactory = config.entry;

      const newEntry = () =>
        entryFactory().then(entry => {
          if (entry['main.js']) {
            entry['main.js'].push(path.resolve('./core/offline'));
          }

          return entry;
        });

      const newConfig = Object.assign({}, config, {
        entry: newEntry,
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(newConfig, options);
      }

      return newConfig;
    },
  });
