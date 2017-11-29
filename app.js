var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var webhooks = require('./routes/webhooks');
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/webhooks', webhooks);

app.listen(port, function () {
    console.log('Running webhook master on port ' + port + '!');
});