const app = require('express')();

const PORT = 4002;
const HOST = 'localhost';

app.get('/:text', (req, res) => {
    res.send('(APP 2) text: ' + req.params.text);
});

app.listen(PORT, () => console.log('listening on ' + PORT));
