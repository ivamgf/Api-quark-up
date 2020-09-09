var express = require('express');
var router = express.Router();
var model = require('../models/AppModel').model;

// Functions - Routes
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', model);
});

/* GET documentation page. */
router.get('/doc', function(req, res, next) {
  res.render('documentation', model);
});

/* GET metadataDC page. */
/*
router.get('/contact', function(req, res, next) {
  res.render('ContactApi', model);
});
*/

module.exports = router;
