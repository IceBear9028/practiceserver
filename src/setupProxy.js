const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api',
        createProxyMiddleware({
            target: 'http://192.168.0.157:8000',
            changeOrigin: true,
        })
    );
};

//https://jsonplaceholder.typicode.com/comments
// http://192.168.0.157:8000