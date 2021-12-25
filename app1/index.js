const app = require('express')();

const PORT = 4001;
const HOST = 'localhost';

app.get('/', (req, res) => {
    res.send('App #1');
});

app.listen(PORT, () => console.log('listening on ' + PORT));
