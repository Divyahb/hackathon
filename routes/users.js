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
router.get('/identity', function(req, resp, next) {
  var validUser = true;
  var userDetails = {
    'error': 'No matching user found'
  };
  var options = {
    method: 'get',
    url: 'http://jan.marketing:3001/blocks'
  }
  request(options, function (err, res, body) {
    if (err) {
      console.error('error posting json: ', err)
      throw err
    }
    body = JSON.parse(body)
    console.log('body: ', body)
    
    for(var i=0;i<body.length;i++){
      console.log("entering")
  
      if(body[i].data && body[i].data.id === req.query.travellerId) {
        console.log(body[i])
        console.log(body[i].data)
        console.log(body[i].data.id)
        console.log(req.query.travellerId)
        userDetails = {
          'name': body[i].data.name,
          'flyingBlueNumber': body[i].data.flyingBlueNumber
        }
        resp.send(userDetails);
        break;
      }
      
    }
    
  });

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

