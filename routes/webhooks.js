const express = require('express');
const router = express.Router();
const request = require('request');

const jenkinsUrl = "http://35.193.23.79:8080";
const JenkinsCrumb = "141ea03a9339f11fe23e9bb6615ec59f";

router.get('/github-pedidos', function (req, res, next) {

  var formData = {
    LABELNAME: 'emarosa-services'
  }

  request.post(
    { 
      url: jenkinsUrl + "/job/start_pedido-service/buildWithParameters?token=nXjba8mqvxSPSYp5rvYNzn0IXHvJPpUO", 
      formData: formData,
      headers: {
        'Jenkins-Crumb': JenkinsCrumb,
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
    console.log('Jenkins called - building job start_pedido-service');
  });

  res.status(200);
});

module.exports = router;
