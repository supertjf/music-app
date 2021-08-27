const path = require('path')
const hardPlugin = require('hard-source-webpack-plugin')

module.exports = {
  publicPath: "./",  //打包相对路径
  // configureWebpack: {
  //   plugins: [
  //     new hardPlugin({
  //       cacheDirectory: path.resolve(__dirname, "cache")
  //     })
  //   ]
  // }
}