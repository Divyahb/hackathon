var express = require('express');
var router = express.Router();

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

router.post('/register', function(req, res, next) {
  var userDetails = {
    'name': req.body.name,
    'flyingBlueNumber': req.body.flyingBlueNumber
  }
  res.send('OK');
});
module.exports = router;

