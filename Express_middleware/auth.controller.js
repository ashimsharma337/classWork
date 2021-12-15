import express from "express";

const router = express.Router();

// We use this route to get the data from user by form if form(front-end) is not available we use postman(api).
router.post("/login", (req, res) => {
     res.json({
        req: req.params,
        body: req.body,
        query: req.query
     });
});
router.get("/", (req, res) => {
    res.send("This is homepage");
});

router.get("/login", (req, res) => {
    res.render("login.pug", {
        title: "Login Page",
        msg: "This is login page."
    });
});

router.get("/users", (req, res) => {
    res.send("This is list of users");
});

router.get("/profile", (req, res) => {
    res.send("This is profile page");
});

router.get("/admin", (req, res, next) => {
    let admin = true;
    if(admin) {
        next();
    } else {
        res.send("No access.")
    }
}, function(req, res, next) {
    res.end("Welcome back.");
});



export { router as authrouter};