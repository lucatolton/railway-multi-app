const app = require('express')();

const PORT = 4001;
const HOST = 'localhost';

app.get('/:text', (req, res) => {
    res.send('(APP 1) text: ' + req.params.text);
});

app.listen(PORT, () => console.log('listening on ' + PORT));
