var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


//Route definition for http://localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Route definition for http://localhost:3000/users with addition information to be stored in the request
router.get('/:Title', function(req, res, next) {
  res.send('You are so ' + req.params.Title)
});

module.exports = router;
