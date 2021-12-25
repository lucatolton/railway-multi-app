const app = require('express')();
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = 3000;
const HOST = 'localhost';

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Proxy');
});

app.use('/app/1', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    pathRewrite: {
        [`^/app/1`]: '',
    }
}));

app.use('/app/2', createProxyMiddleware({
    target: 'http://localhost:4002',
    changeOrigin: true,
    pathRewrite: {
        [`^/app/2`]: '',
    }
}));

app.listen(PORT, () => console.log('listening on ' + PORT));
