var path = require('path')
var webpack = require('webpack')
var webpack_base = require('./webpack.base.conf')
var merge = require('webpack-merge')
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(webpack_base.entry).forEach(function(name) {
    webpack_base.entry[name] = ['webpack-hot-middleware/client'].concat(webpack_base.entry[name])
})


module.exports = merge(webpack_base, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true
        })
  ],
  postcss: function() {
    return [precss, autoprefixer];
  }
})
