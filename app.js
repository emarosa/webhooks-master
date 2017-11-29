var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var webhooks = require('./routes/webhooks');

app.use('/webhooks', webhooks);

app.listen(3000, function () {
    console.log('Running webhook master!');
});