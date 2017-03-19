var path = require('path')
var config = require('../config')
//var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

module.exports = {
  entry: ['./src/index.js'],
  resolve: { //插件资源等等
    //extensions: ['', '.js', '.jsx', '.less', '.css', '.scss'],
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
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(__dirname, '../src')
    },{
      test: /\.css$/,
      loader: 'style!css',
      exclude: /node_modules/,
      include: path.join(__dirname, '../src/resource/css')
    },
    {
      test: /\.scss$/,
      loader: "style!css!sass",
      exclude: /node_modules/,
      include: path.join(__dirname, '../src'),
    },{
      test: /\.less$/i,
      loader: "style!css!less",
      exclude: /node_modules/,
      include: path.join(__dirname, '../src/resource/less')
    }]
  },
  postcss: function() {
    return [precss, autoprefixer];
  }
}
