// import * as http from "http";
import express from "express";

var app = express();

const PORT = 9000;

app.get("/", (req, res) => {                                         
    // res.send("Welcome to the Homepage");
    // if we want to send a file then               // The process object is a global that provides information about, 
    // console.log(process);                        // and control over, the current Node.js process. 
    // console.log(process.argv);                   // As a global, it is always available to Node.js applications without using require().
    res.sendFile(process.cwd()+"/View/about.html");  // The process.env property returns an object containing the user environment.
    //using es5(res.sendFile(__dirname, View, about.html))                           
});

// Example of major res function
// .json()
// .end()
// .send()
// .sendfile()
// .redirect()
// .status()
// .sendStatus()
// .download()

// GET request is method to read
app.get("/about", (req, res) => {
    res.json({
        res: "We are about us page."
    })
});

// app.get("/", (req, res) => {
//     res.json({
//        data: "This is test."
//     });
// });

// app.get("/", (req, res) => {
//     res.redirect("/about");
// }),

// POST request is used to fetch user data for login registration/ 
// we can not make post request in browser without form so we use postman

app.post("/login", (req, res) => { 
    //we have to validate
    // then database query
    // then if success following data 
    // if not response failure                      // 3 things come in request except session cookie
    res.json({                                      // 1st through url optional(query) it is after ?
        body: req.body,                             // 2nd path(parameter)
        param: req.params,                           // 3rd data in form field(body)
        query: req.query                                         
    });
});









// const server = http.createServer((req, res) => {
       // Url
       // login
       // authorization            // http server has to deal with all this in one place so express make it easy
       // content
       // getcontent
// });

// URL slug(last part of the url after the last backslash) sometimes id are treated like slug but it is vulnerable
// Dynamic routing
app.get("/product/:id/:status", (req, res) => {
    let id = req.params.id;
    let status = req.params.status;
    let title = req.query.title;     // For query no params
    res.json({
       id: id,
       status: status,
       query: req.query,    //optional what comes after ?
       title: title   
    });
});

app.listen(PORT, "localhost", function(err) {
    console.log("Server is running in port 9000");
});