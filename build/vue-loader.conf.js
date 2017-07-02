var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
    // not 'config.build.productionSourceMap', as we're loading CSS in via injecting <styles/>.
    // Do not include CSS sourcemap to save *a lot* of space as it can't be separate out for some reason.
    ? false
    : config.dev.cssSourceMap,
    extract: false
  }),
  esModule: true,
}
