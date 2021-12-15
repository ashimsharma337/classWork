import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
//we need to change up how __dirname is used for ES6 purposes using process.cwd() is not recommended
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const router = express.Router();

// Setting port number
app.set("PORT", 9000);


router.get("/", (req, res) => {
    res.send("This is home page");
});

// built in middleware express
// app.use("/uploads", express.static("uploads"));
// app.use("/assets", express.static("uploads")); same as above but /assets in url instead of uploads

// console.log(path.join(process.cwd(), "/assets"));// this way better but without cwd
// console.log(path.join(__dirname, "/assets"));
// app.use("/assets", express.static(process.cwd()+"/uploads"));

// now  load  static html and css files for  express app,  from  /uploads directory
// app.use("/uploads", express.static(path.join(__dirname ,'uploads')));

app.use(router);

app.listen(app.get("PORT"), (req, res) => {
    console.log("Server is listening at port 9000");
});

