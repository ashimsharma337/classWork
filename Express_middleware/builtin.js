import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { authrouter } from "./auth.controller.js";
import  bodyParser  from "body-parser";
//we need to change up how __dirname is used for ES6 purposes using process.cwd() is not recommended
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const router = express.Router();

// Setting port number
app.set("PORT", 9000);


router.get("/", (req, res) => {
    res.send("This is home page");
});

// built in middleware express express.static()(used to upload static file) and express.urlencoded()(use for data parsing)
// app.use("/uploads", express.static("uploads"));
// app.use("/assets", express.static("uploads")); same as above but /assets in url instead of uploads

// console.log(path.join(process.cwd(), "/assets"));// this way better but without cwd
// console.log(path.join(__dirname, "/assets"));
// app.use("/assets", express.static(process.cwd()+"/uploads"));

// now  load  static html and css files for  express app,  from  /uploads directory
// app.use("/uploads", express.static(path.join(__dirname ,'uploads')));

// for form data we need to parse (e.g urlencoded parsing and json dara parsing) depends on type of data receive

// url encoded parsing
app.use(express.urlencoded({
    extended: true
}));

// Using body parser
// app.use(bodyParser.urlencoded({
//     extended: true
// })); //but it is third party middleware we have to install, express has builtin middleware so we use express.urlencoded()

// parsing json data
app.use(express.json());

app.use(authrouter);

app.listen(app.get("PORT"), (req, res) => {
    console.log("Server is listening at port 9000");
});

