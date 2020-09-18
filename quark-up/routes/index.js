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
/* Get Info */
router.get('/info', UsersController.index);

/* Get Users */
router.get('/queryUsers', UsersController.show);

/* Get User by id */
router.get('/queryUser/:id', UsersController.showUser);

/* Post User by id */
router.post('/regUsers', UsersController.registerUser);

/* Put User by id */
router.put('/upUsers/:id', UsersController.updateUser);

/* delete User by id */
router.put('/deleteUsers/:id', UsersController.destroyUser);

// Exports
module.exports = router;
