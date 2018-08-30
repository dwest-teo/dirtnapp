// eslint-disable-next-line no-unused-vars
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');
const entry = require('./core/next-plugins/entry');
const serviceWorker = require('./core/next-plugins/service-worker');

module.exports = withPlugins([
  [
    bundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    },
  ],
  entry,
  serviceWorker,
]);
