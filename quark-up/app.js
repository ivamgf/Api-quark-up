// App script

// Imports

// Imports Modules

// Imports components

// Variables
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');
const mongoose = require('mongoose');
// const requireDir = require('require-dir');
var app = express();

// Constant

// Functions
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors( ));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Starting the Database
// Warning: Verify Network Access: IP Access List in MongoDB Atlas.
mongoose.connect(
  'mongodb+srv://ivamgf:10106088@cluster0.diple.mongodb.net/db_module_test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });
require('./models/UsersModel');

// Exports
module.exports = app;
