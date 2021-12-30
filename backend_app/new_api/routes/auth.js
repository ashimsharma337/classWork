const express = require("express");
const router = express.Router();
const passwordHash = require("password-hash"); 
const UserModel = require("../model/user_model");

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
                  res.status.json({
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
                             token: ""
                         },
                         msg: "Login success.",
                         status: 200
                     })
                 }
              }
       });
});


module.exports = router;