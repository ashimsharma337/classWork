import express from "express";
import { Router } from "express";


const app = express();
const router = express.Router();

// MiddleWare
// app.use("/", (req, res, next) => {
//     console.log("I was called");
//     next();
// });

// There are five type of express middleware 
/*
* a. App level middleware -Bind application-level middleware to an instance of the app object by using 
*                          the app.use() and app.METHOD() functions
* b. Router level middleware -Router level middleware work just like application level middleware except
*                             they are bound to an instance of express.Router ()
* c. Error handleing middleware -Define error-handling middleware functions in the same way as 
*                                other middleware functions, except with four arguments instead 
*                                of three, specifically with the signature (err, req, res, next)): 404 error cant be handle
* d. Built in middleware -express.static serves static assets such as HTML files, images, and so on.
*                         express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
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


app.listen(8000, () => {
    console.log("server is listening at port 8000....");
});

