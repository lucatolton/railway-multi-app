console.log('starting apps');

setTimeout(() => {
    const proxy = require('./proxy');
    const app1 = require('./app1');
    const app2 = require('./app2');
}, 500);
