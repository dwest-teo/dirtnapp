const NextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin');

module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      const {
        dev,
        buildId,
        config: { distDir },
      } = options;

      if (!dev) {
        config.plugins.push(
          new NextWorkboxWebpackPlugin({
            distDir,
            buildId,
            clientsClaim: true,
            skipWaiting: true,
            precacheManifest: true,
            runtimeCaching: [
              {
                urlPattern: /\.(gif|png|gltf|bin|jpe?g|svg|ico)$/i,
                handler: 'cacheFirst',
              },
              {
                urlPattern: /\.js$/i,
                handler: 'cacheFirst',
              },
              {
                urlPattern: /\/sw\.js$/g,
                handler: 'networkOnly',
              },
            ],
          })
        );
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
