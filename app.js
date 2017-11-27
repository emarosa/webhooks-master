var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var webhooks = require('./routes/webhooks');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/webhooks', webhooks);

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message,
        error: err.keys || err
    });
});

module.exports = app;
