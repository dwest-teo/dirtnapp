const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /\.(gif|png|gltf|bin|jpe?g|svg|ico)$/i,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /\.js$/i,
        handler: 'CacheFirst',
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ];
    },
  },
});
