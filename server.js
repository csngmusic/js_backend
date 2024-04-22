const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('public'))

app.get('/', function(req, res) {
    const data = {};
    res.send(data);
});
app.get('/cart', function(req, res) {
    console.log(req.query);
    const data = {};
    for (item in req.query) {
        data[item] = 0.5 * req.query[item]
    }

    res.send(data);
});
app.listen(port, function() {
    console.log('Server is started!');
});