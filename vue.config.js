module.exports = {
    configureWebpack: {
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.baidu.com/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

