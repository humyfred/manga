var path = require('path')
var config = require('../config')
//var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

module.exports = {
  entry: {
    app : './src/index'
  },
  output: {
    path: path.resolve(__dirname, '../dist/'), //文件输出目录
    filename: '[name].js', //根据入口文件输出的对应多个文件名
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath //用于配置文件发布路径，如CDN或本地服务器
  },
  resolve: { //插件资源等等
    extensions: ['', '.js', '.jsx', '.less', '.css', '.scss'],
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
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },{
      test: /\.css$/,
      loader: 'style!css',
      exclude: /node_modules/,
      include: path.join(__dirname, 'resource/css')
    },
    {
      test: /\.scss$/,
      loader: "style-loader!css-loader!sass-loader",
      exclude: /node_modules/,
      include: __dirname,
    },{
      test: /\.less$/i,
      loader: "style-loader!css-loader!less-loader",
      exclude: /node_modules/,
      include: path.join(__dirname, 'resource/less')
    }]
  },
  postcss: function() {
    return [precss, autoprefixer];
  }
}
