var createError = require('http-errors');
var express = require('express');
var path = require('path');
const api_routes = require("./routes/api");
require("./db_init");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// api routes
app.use("/", api_routes);
// for web base application versioning in backend forward and backward compatibily(it is manage through url)
// app.use("api/v1", api_routes);
// app.use("api/v2", api_routes);

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
  } else {
    console.log("Server is listening at port 9000....")
  }
});
module.exports = app;
