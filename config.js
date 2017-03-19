var path = require('path')
module.exports = {

  build : {
    env : { NODE_ENV : 'production' },
    assetsRoot : path.resolve(__dirname, 'dist'),
    assetsSubDirectory : 'static',
    assetsPublicPath : '/'
  },

  dev : {
    env : { NODE_ENV : 'development' },
    port : 8088,
    assetsRoot : path.resolve(__dirname, 'dist'),
    assetsSubDirectory : 'static',
    assetsPublicPath : '/'
  }
}
