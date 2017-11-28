var express = require('express');
var app = express();

var webhooks = require('./routes/webhooks');

app.use('/webhooks', webhooks);

app.listen(3000, function () {
    console.log('Running webhook master!');
});