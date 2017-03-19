var path = require('path')
var webpack = require('webpack')
var webpack_base = require('./webpack.base.conf')
var merge = require('webpack-merge')
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin');

// add hot-reload related code to entry chunks
// Object.keys(webpack_base.entry).forEach(function(name) {
//     webpack_base.entry[name] = [].concat(webpack_base.entry[name])
// })

webpack_base.entry.push('webpack-hot-middleware/client');

module.exports = merge(webpack_base, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: config.dev.assetsRoot, //文件输出目录
    filename: path.join(config.dev.assetsSubDirectory, '/js/[name].js'), //根据入口文件输出的对应多个文件名
    publicPath: '/' //用于配置文件发布路径，如CDN或本地服务器
  },
  plugins: [
    new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
    //new webpack.NoErrorsPlugin(),
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
