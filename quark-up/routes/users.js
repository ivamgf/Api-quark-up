// users file

// Imports

// Imports Modules

// Imports components

// Variables
var express = require('express');
var router = express.Router();

// Constant

// Functions
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Exports
module.exports = router;
