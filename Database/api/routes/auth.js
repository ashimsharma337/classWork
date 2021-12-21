const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {

      // DB operation is done here 
      res.json({
          body: req.body
      });
});

router.post("/login", (req, res, next) => {

});



module.exports = router;