const router = require("express").Router();
const uploader = require("../middleware.js/uploader");


/* GET users listing. */
router.post('/', uploader.single("image"), function(req, res, next) {
 
  res.json({
    body: req.body,
    file: req.file
  });
});

module.exports = router;
