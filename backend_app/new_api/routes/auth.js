const express = require("express");
const router = express.Router();

router.route("/")
.get((req, res, next) => {
     res.json();
})
.post((req, res, next) => {
    res.json({
        body: req.body
    });
});

router.route("/:id")


module.exports = router;