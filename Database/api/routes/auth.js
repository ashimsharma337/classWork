const express = require("express");
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "mern-2";
const router = express.Router();

router.post("/register", (req, res, next) => {
      // DB operation is done here 

      // 1. connecting  to database server(we require client to connect)
      MongoClient.connect(dbUrl, function(err, client) {      // This return promise or we can use callbacks as well
          if(err) {
             next(err);
          } else {
             const db =  client.db(dbName);
             db.collection('users').insertOne(req.body)
             .then((succ) => {
                 res.json(req.body);
             })
             .catch(err => console.log("Error:>>>", err));
          }
      })         

             
});

router.post("/login", (req, res, next) => {

});



module.exports = router;