import express from "express";

const router = express.Router();


router.post("/login", (req, res) => {
     
});
router.get("/", (req, res) => {
    res.send("This is homepage");
});

router.get("/login", (req, res) => {
    res.send("This is login page");
});

router.get("/users", (req, res) => {
    res.send("This is list of users");
});

router.get("/profile", (req, res) => {
    res.send("This is profile page");
});

export { router as authrouter};