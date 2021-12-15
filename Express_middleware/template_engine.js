import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { authrouter } from "./auth.controller.js";
import  pug  from "pug";
//we need to change up how __dirname is used for ES6 purposes using process.cwd() is not recommended
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// A template engine enables you to use static template files in your application. 
// At runtime, the template engine replaces variables in a template file with actual values, 
// and transforms the template into an HTML file sent to the client. This approach makes it easier to 
// design an HTML page.
// Some popular template engines that work with Express are Pug, Mustache, and EJS. 
// The Express application generator uses Jade as its default, but it also supports several others.

app.set("views", path.join(__dirname, "/View"));
app.set("view engine", pug); // pug works in the basis of indentation
// we use render method to use pug file/ put res.render() in auth.controller login route


// Setting port number
app.set("PORT", 9000);

app.use(authrouter);


app.listen(app.get("PORT"), (req, res) => {
    console.log("Server is listening at port 9000");
});