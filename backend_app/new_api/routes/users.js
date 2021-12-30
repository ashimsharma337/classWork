var express = require('express');
var router = express.Router();
const fs = require("fs");
const multer = require("multer");

const fileFilter = function(req, file, cb) {
  const mimetype = file.mimetype.split("/")[0];
  if(mimetype === "image") {
     cb(null, true);
  } else {
     cb(null, false);
  }
};

const myStorage = multer.diskStorage({
      filename: function(req, file, cb) {
        cb(null, Date.now()+file.originalname);
      },
      destination: function(req, file, cb) {
        cb(null, process.cwd()+"/uploads");
      },
      fileFilter: fileFilter
});

const upload = multer({
     storage: myStorage,
     fileFilter: fileFilter
});


/* GET users listing. */
router.post('/', upload.single("image"), function(req, res, next) {
 
  res.json({
    body: req.body,
    file: req.file
  });
});

module.exports = router;
