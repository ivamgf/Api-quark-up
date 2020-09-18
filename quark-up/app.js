// App script
// Version 1.0.0

// Imports

// Imports Modules

// Imports components

// Variables
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Starting the Database
// Connecting to the database

const connect = async function () {
  const uri = 'mongodb://konektron01:Konektron10106088@mongodb.konektron.kinghost.net/konektron01?retryWrites=true&w=majority'; // Will return DB URI
  console.log(`Connecting to DB - uri: ${uri}`);
  return mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
};

connect().then(() => {
  console.log('handle success here');
}).catch((e) => {
  console.log('handle error here: ', e.message)
})
require('./models/UsersModel');
// Starting the Database

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');

var app = express();

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

// Exports
module.exports = app;