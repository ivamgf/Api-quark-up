// Routing Modules - index

// Imports

// Imports Modules

// Imports components

// Variables
var express = require('express');
var router = express.Router();
var model = require('../models/AppModel').model;
var UsersController = require('../controllers/UsersController');

// Constant

// Functions - Routes

// Basic Routes
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', model);
});

/* GET documentation page. */
router.get('/doc', function(req, res, next) {
  res.render('documentation', model);
});

/* GET Contact page. */
router.get('/cont', function(req, res, next) {
  res.render('contacts', model);
});
/* Get Users */
router.get('/queryUser', UsersController.index);

// Exports
module.exports = router;
