var path = require('path')
module.exports = {

  build : {
    env : { NODE_ENV : 'production' },
    assetsRoot : path.resolve(__dirname, '../dist/'),
    assetsSubDirectory : 'static',
    assetsPublicPath : '/dist/'
  },

  dev : {
    env : { NODE_ENV : 'dev' },
    port : 8088,
    assetsRoot : path.resolve(__dirname, '../dist/'),
    assetsSubDirectory : 'static',
    assetsPublicPath : '/dist/'
  }
}
