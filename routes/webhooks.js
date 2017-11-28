const express = require('express');
const router = express.Router();
const request = require('request');

const jenkinsUrl = "http://localhost:8080";

router.get('/github-pedidos', function (req, res, next) {

  var jobName = "start_pedido-service";

  var formData = {
    LABELNAME: 'emarosa-services'
  }

  request.post(
    {
      url: jenkinsUrl + "/job/" + jobName +"/buildWithParameters?token=nXjba8mqvxSPSYp5rvYNzn0IXHvJPpUO",
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
