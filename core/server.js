const { join } = require('path');
const { parse } = require('url');
const { json } = require('micro');
const route = require('micro-route');
const compress = require('micro-compress');
const next = require('next');
const api = require('./api');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();
const root = process.cwd();

const indexRoute = route('/', 'GET');
const serviceWorkerRoute = route('/sw.js', 'GET');
const workboxRoute = route('/static/workbox/', 'GET');
const robotsRoute = route('/robots.txt', 'GET');
const apiRoute = route('/api', 'POST');

async function main(req, res) {
  const parsedUrl = parse(req.url, true);
  const { query } = parsedUrl;

  if (indexRoute(req)) {
    return app.render(req, res, '/index', query);
  }

  if (serviceWorkerRoute(req)) {
    return app.serveStatic(req, res, join(root, `./static/workbox/${req.url}`));
  }

  if (workboxRoute(req)) {
    return app.serveStatic(req, res, join(root, `.${req.url}`));
  }

  if (robotsRoute(req)) {
    return app.serveStatic(req, res, join(root, `./static/${req.url}`));
  }

  if (apiRoute(req)) {
    const data = await json(req);

    if (data.name) {
      const response = await api(data.name);
      return response;
    }

    return { success: false };
  }

  return handle(req, res, parsedUrl);
}

async function setup(handler) {
  await app.prepare();
  return handler;
}

module.exports = dev ? setup(main) : setup(compress(main));
