const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/ops',
      {
        target: 'https://ops-api.beeplaying.com',
        changeOrigin: true,
        pathRewrite: {
          '^/ops': 'ops'
        }
      }
    )
  )
  app.use(
    createProxyMiddleware(
      '/api',
      {
        target: 'http://im-config.jdd-hub.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    )
  )
};