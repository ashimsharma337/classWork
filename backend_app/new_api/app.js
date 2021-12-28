var createError = require('http-errors');
var express = require('express');
var path = require('path');
require("./db_init");


var indexRouter   = require('./routes/index');
var usersRouter   = require('./routes/users');
var authRouter    = require('./routes/auth');
var productRouter = require('./routes/product');

var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // response error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(9000, (err) => {
  if (err) {
  console.log("Error: ", err);
  }
});
module.exports = app;
