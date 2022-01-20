const express = require("express");
const router = express.Router();
const passwordHash = require("password-hash"); 
const UserModel = require("../model/user_model");
const jwt = require("jsonwebtoken");
const isLoggedIn = require("../middleware.js/isLoggedIn");

const generateToken = (user) => {
    let token = jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
    }, "Private key");
    return token;
}

router.post("/register", (req, res, next) => {  

      const user = new UserModel(req.body);
      // password hash here
      user.password = passwordHash.generate(req.body.password);
      user.save(function(err, success) {
          if(err) {
              res.status(400).json({
                  data: null,
                  msg: "Error Registering User!",
                  status: 400
              })
          } else {
             res.json({
             data: user,
             msg: "User Added Successfully.",
             status: 200   
             })
            }
          
      });
});

router.post("/login", (req, res, next) => {
      UserModel.findOne({
          email: req.body.email
      }, {}, function(err, user) {
              if(!user) {
                  res.status(200).json({
                      data: null,
                      msg: "User not found!",
                      status: 404
                  })
              } else {
                 if(!passwordHash.verify(req.body.password, user.password)) {
                     res.status(400).json({
                         data: null,
                         msg:  "Password does not match.",
                         status: 400
                     });
                 } else {
                     res.json({
                         data: {
                             user: user,
                             token: generateToken(user)
                         },
                         msg: "Login success.",
                         status: 200
                     })
                 }
              }
       });
});


router.get("/dashboard", isLoggedIn, (req, res, next) => {
    res.json({
        data: req.user,
        msg: "Welcome to dashboard",
        status: true
    })
       
}) 

router.get("/admin", isLoggedIn, (req, res, next) => {
    res.json({
        data: req.user,
        msg: "Welcome to admin page",
        status: true
    })
       
})

module.exports = router;