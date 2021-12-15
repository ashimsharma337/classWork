import express from "express";

/*
The order of middleware loading is important: middleware functions that are loaded first are also executed first.
If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print url, 
because the route handler of the root path terminates the request-response cycle
*/

const PORT =  process.env.PORT || 9000;
const app = express();


// Every path will be mounted
// app.use((req, res, next) => {
//    console.log("I will be called every time.")
// });

app.use("/trueorfalse", (req, res, next) => {
   let x = false;
   if(x) {
       next();
   } else {
       res.send("X was false")
   }
}, function(req, res, next) {
    res.end("Yes x true");
});

//app.use(logger);


app.get("/", (req, res) => {
    res.send("this is home page.");
    console.log("home page");
    
});

app.get("/users", auth, (req, res) => {
   console.log(`user is admin = ${req.admin}`);
   res.send("this is users page.");
   console.log("users");
});



function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
function auth(req, res, next) {
    console.log("auth");
    if (req.query.admin === "true") {
        req.admin = true;
        next();
    } else {
        res.send("No auth");
    }
    
}

app.listen(PORT, () => console.log("Server is listening at port 9000"));