import express from "express";
import { Router } from "express";


const app = express();
const router = express.Router();

var createError = require('http-errors');      //error handling package from npm

// MiddleWare
// app.use("/", (req, res, next) => {
//     console.log("I was called");
//     next();
// });

Middleware functions are functions that have access to the request object (req), the response object (res), 
and the next middleware function in the application’s request-response cycle. 
These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

app.use(req, res, next) is an API that allows us to add one or more middlewares to the request pipeline of express. 
A middleware is a function that has a defined signature, and through that, you can modify or end the request, 
returning a response according to a condition that you program. For example, I can call res.end() and finish the request to the client. 
Middlewares are executed in the order they're added. I can simply decorate the req object, adding or removing properties, for example, 
authenticating an user and setting req.user = 'any user of database', and calling next(), the next middleware will begin its execution, 
receiving the same instance of req, res, next.

Middleware literally means anything you put in the middle of one layer of the software and another. 
Express middleware are functions that execute during the lifecycle of a request to the Express server. 
Each middleware has access to the HTTP request and response for each route (or path) it's attached to.

// There are five type of express middleware 
/*
* a. App level middleware -Bind application-level middleware to an instance of the app object by using                                 app.use
*                          the app.use() and app.METHOD() functions
* b. Router level middleware -Router level middleware work just like application level middleware except                               router.use                   
*                             they are bound to an instance of express.Router ()
* c. Error handling middleware -Define error-handling middleware functions in the same way as                                          app.use((err, req, res, next)                                          
*                                other middleware functions, except with four arguments instead 
*                                of three, specifically with the signature (err, req, res, next)): 404 error cant be handle
*                                app.use((err, req, res, next) => {res.sendStatus(404)}); always called at end
* d. Built in middleware -express.static serves static assets such as HTML files, images, and so on.                                   express.static,express.json,              
*                         express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+               express.urlencoded               
*                         express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
* e. Third party middleware -body-parser, cookie-parser
*/

app.get("/about", (req, res) => {
    res.send("This is about page.");
});

app.get("/profile", (req, res) => {
    res.send("This is profile page.");
});

// app.use("/", (req, res, next) => {
//     console.log("404 error");
//     res.send("404 Error");
//     next();
// });


app.use("/", router);

//using http-errors from npm

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

app.listen(8000, () => {
    console.log("server is listening at port 8000....");
});

