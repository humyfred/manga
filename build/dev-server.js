
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var webpackConfig = require('./webpack.dev.conf')
var config = require('../config');
var compiler = webpack(webpackConfig)


process.env.NODE_ENV = config.dev.env.NODE_ENV
process.env.PORT = config.dev.port

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    webpackHotMiddleware.publish({
        action: 'reload'
    })
    cb()
  })
})

app.set('port', (process.env.PORT || 9999));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve webpack bundle output
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))

// enable hot-reload and state-preserving
// compilation error display
app.use(webpackHotMiddleware(compiler))


app.use('/', express.static(path.join(__dirname,'./dist/')));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '');
});
