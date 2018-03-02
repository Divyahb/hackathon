var express = require('express');
var router = express.Router();
var request = require('request');
var randomstring = require("randomstring");

/* GET users listing. */
router.post('/identity', function(req, res, next) {
  var validUser = true;
  var userResponse = {
    'name': 'Jan',
    'flyingBlueNumber': '232323'
  }
  var userDetails = {
    'name': userResponse.name,
    'flyingBlueNumber': userResponse.flyingBlueNumber
  }
  var errorStatus = {
    'error': 'No matching user found'
  }
  if(validUser) {
    res.send(userDetails);
  }else {
    res.send(error);
  }
});

/* GET users listing. */
router.get('/identity', function(req, res, next) {
  var validUser = true;
  var userResponse = {
    'name': 'Jan',
    'flyingBlueNumber': '232323'
  }
  var userDetails = {
    'name': userResponse.name,
    'flyingBlueNumber': userResponse.flyingBlueNumber
  }
  var errorStatus = {
    'error': 'No matching user found'
  }
  if(validUser) {
    res.send(userDetails);
  }else {
    res.send(error);
  }
});

router.post('/register', function(req, resp, next) {
  var uid = randomstring.generate(7);
  var userDetails = {"data": {
    'id': uid,
    'name': req.body.name,
    'flyingBlueNumber': req.body.flyingBlueNumber
  }
  }
  var options = {
    method: 'post',
    body: userDetails,
    json: true,
    url: 'http://jan.marketing:3001/mineBlock'
  }
  request(options, function (err, res, body) {
    if (err) {
      console.error('error posting json: ', err)
      throw err
    }
    var headers = res.headers
    var statusCode = res.statusCode
    console.log('headers: ', headers)
    console.log('statusCode: ', statusCode)
    console.log('body: ', body)
    resp.json({"id":uid});
  })
  
});
module.exports = router;

