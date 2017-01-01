
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./webpack.config')
var compiler = webpack(config)

app.set('port', (process.env.PORT || 9999));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname,'')));
app.use('/', express.static(path.join(__dirname, '')));
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '');
});
