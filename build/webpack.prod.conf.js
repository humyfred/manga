var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack_base = require('./webpack.base.conf')
var merge = require('webpack-merge')
var config = require('../config')

//var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

module.exports = merge(webpack_base, {
  output: {
      path: config.build.assetsRoot,
      filename: path.join(config.build.assetsSubDirectory, '/js/[name].js'),
      chunkFilename: path.join(config.build.assetsSubDirectory, '/js/[name].[chunkhash].min.js'),
      publicPath: config.build.assetsPublicPath  //用于配置文件发布路径，如CDN或本地服务器
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': config.build.env
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true
        }),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
      }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
      })
  ],
  postcss: function() {
    return [precss, autoprefixer];
  }
})
