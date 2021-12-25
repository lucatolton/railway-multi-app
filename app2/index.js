const app = require('express')();

const PORT = 4002;
const HOST = 'localhost';

app.get('/', (req, res) => {
    res.send('App #2');
});

app.listen(PORT, () => console.log('listening on ' + PORT));
