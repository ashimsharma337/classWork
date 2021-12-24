//const express = require("express");
//const router = express.Router();
//const dbconfig = require("./db.config");

// This route needs to be fixed
const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dburl = "mongodb://localhost:27017";
const dbName = "mern-2";
const router = express.Router();
const oID = mongodb.ObjectId;

// function dbConnect(cb) {
//          MongoClient.connect(dburl, function(err, client) {
//             if(err) {
//                 cb(err);
//             } else {
//                 const db = client.db(dbName);
//                 cb(null, db);
//             }
//         })
// }

// router.route("/")
// .get((req, res, next) =>{
//     dbConnect(function(err, db) {
//         if(err) {
//             next(err);
//         } else {
//             db.collection("products").find()
//               .sort({_id: -1})            
//               .toArray()                  
//               .then(products => {
//                   res.json(products);
//               })
//               .catch((errs) => {
//                   // next(errs);
//                    res.json(errs);
//               });
//         }
//     })
// })


//module.exports = router;
