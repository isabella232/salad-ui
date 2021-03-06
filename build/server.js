'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routing = require('../conf/routing.json');

var _routing2 = _interopRequireDefault(_routing);

var _routeParser = require('route-parser');

var _routeParser2 = _interopRequireDefault(_routeParser);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fetch polyfill must be available natively...
global.fetch = _nodeFetch2.default;

var renderFullPage = function renderFullPage(html, initialState, bundle, bodyClass) {
  return '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Salad-UI Components</title>\n    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">\n    <link rel="stylesheet" href="/demo/demo.css"/>\n    <link rel="stylesheet" href="/demo/transitions.css"/>\n  </head>\n  <body class="' + bodyClass + '">\n    <div id="react-root">' + html + '</div>\n    <script>__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '</script>\n    <script src="/' + bundle + '/' + bundle + '.js"></script>\n  </body>\n</html>';
};

var routes = _routing2.default.map(function (r) {
  r.route = (0, _routeParser2.default)(r.url);
  return r;
}),
    app = (0, _express2.default)(),
    useProd = false,
    PORT = 6040,
    argv = require('optimist').argv;

app.use(_bodyParser2.default.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

console.log('Initializing Salad-UI server is-client=' + argv['is-client'] + ', local=' + argv['local']);

if (argv['local']) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('../conf/webpack.config.demo.dev.js');

  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

app.all('/api-mock', function (req, res) {
  if (!req.query || !req.query.url) return res.status(400).send("No URL provided");

  var q = {
    url: new Buffer(req.query.url, 'base64').toString('binary'),
    method: req.method,
    // can't pass headers //req.headers
    headers: {
      // 'Accept': 'application/json',
      'content-type': 'application/json'
    },
    json: true
  };

  if (~['POST', 'PUT', 'PATCH'].indexOf(req.method.toUpperCase())) {
    console.log('req.body', req.body);
    q.body = req.body;
  }

  console.log("Requested", q.method, q.url);

  (0, _request2.default)(q, function (err, r, body) {
    if (!err) {
      res.header({ 'content-type': 'application/json' }).status(r.statusCode).send(body);
    } else {
      res.status(500).send({ err: err, body: body });
    }
  });
});

app.use(_express2.default.static('./dist'));

app.get('*', function (req, res) {
  var route = routes.find(function (r) {
    return r.route.match(req.url);
  });
  if (!route) {
    return res.status(404).send('Page not found');
  }

  var initialState = {
    username: 'spi0n', //The owner channel
    useFixtures: true,
    query: route.route.match(req.url)
  };

  var html = '';
  if (!argv['is-client']) {
    var DemoPage = require('./components/demo/demo').default;
    html = _server2.default.renderToString(_react2.default.createElement(DemoPage, initialState));
  }

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState, route.bundle, route.bodyClass || ''));
});

app.listen(PORT, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:' + PORT);
});