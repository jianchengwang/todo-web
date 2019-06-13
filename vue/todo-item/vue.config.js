const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

function resolve (dir) {
  console.log(path.join(__dirname, dir))
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) { // 开发环境配置
      config.devtool = 'cheap-module-source-map'
    } else { // 生产环境配置
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@asserts', resolve('src/assets'))
      .set('@style', resolve('src/style'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },

  devServer: {
    open: true, // 浏览器自动打开页面
    host: '0.0.0.0', // 如果是真机测试，就使用这个IP
    port: 9999,
    https: false,
    hotOnly: false // 热更新（webpack已实现了，这里false即可）
    // proxy: {
    //   // 配置跨域
    //   '/api': {
    //     // target: "http://192.168.1.190:8080/",
    //     target: 'http://192.168.0.217:8081',
    //     // target: "http://192.168.1.188:8080/",
    //     // target: "http://xone.xy-asia.com",
    //     ws: true,
    //     changOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
