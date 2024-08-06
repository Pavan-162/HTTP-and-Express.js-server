const express = require('express');

const app = express();

app.get('/',function(req, res) {
    res.send('<h1>Hello world!</h1>');
})

app.listen(5000, function(req, res) {
    console.log('Running');
});