module.exports = {
  // 修改的配置
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    //  https: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
