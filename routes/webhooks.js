const express = require('express');
const router = express.Router();
const request = require('request');

const jenkinsUrl = "http://35.193.23.79:8080";

router.post('/github-start-pedidos-service', function (req, res, next) {

  var jobName = "start_pedido-service";
  var token = "nXjba8mqvxSPSYp5rvYNzn0IXHvJPpUO";

  var formData = {
    LABELNAME: 'emarosa-services'
  }

  request.post(
    {
      url: jenkinsUrl + "/job/" + jobName +"/buildWithParameters?token=" + token,
      formData: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        'user': 'auto',
        'pass': 'auto',
        'sendImmediately': true
      }
    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        next(err);
      }
      console.log('Jenkins called - building job ' + jobName);
    });

  res.status(200);
});

router.post('/github-pedidos-service', function (req, res, next) {

  var jobName = "pedido_service";
  var token = "kdLtC2IqMwJBlctf8APoDRMCjbSVtBlk";

  var formData = {
    LABELNAME: 'emarosa-services'
  }

  request.post(
    {
      url: jenkinsUrl + "/job/" + jobName + "/buildWithParameters?token=" + token,
      formData: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        'user': 'auto',
        'pass': 'auto',
        'sendImmediately': true
      }
    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        next(err);
      }
      console.log('Jenkins called - building job ' + jobName);
    });

  res.status(200);
});

module.exports = router;
