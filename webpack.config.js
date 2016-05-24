var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index',
    // 'common.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),//文件输出目录
    filename: 'bundle.js',//根据入口文件输出的对应多个文件名
    publicPath: '/static/'//用于配置文件发布路径，如CDN或本地服务器
  },
  resolve:{   //插件资源等等
    alias: {
      // js: path.join(__dirname, "src/scripts"),
      // src: path.join(__dirname, "src/scripts"),
      // styles: path.join(__dirname, "src/styles"),
      // img: path.join(__dirname, "src/img")
    },
    root: [
      // path.join(__dirname, "bower_components")
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('common.js')
    // new webpack.optimize.UglifyJsPlugin({
    //     compress : {
    //       warnings:false
    //     }
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/,
        include: path.join(__dirname,'resource/css/build')
      },
      {
        test: /\.scss$/,
        loaders: [
          // 'postcss',
          'sass'
        ],
      }
    ]
  }
}
