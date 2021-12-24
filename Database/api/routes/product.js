const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dburl = "mongodb://localhost:27017";
const dbName = "mern-2";
const router = express.Router();
const oID = mongodb.ObjectId;    //its a class in mongodb we need this to search from id

// Performing CRUD operation (complete crud operation using mongodb_nodejs_driver{core concept of mongodb})

/* The router.route() function returns an instance of a single route that you can then use to 
*  handle HTTP verbs with optional middleware. You can also use the router.route() function 
*  to avoid duplicate route naming as well as typing errors.*/

// List all product
router.get("/", (req, res, next) => {
          MongoClient.connect(dburl, function(err, client) {
          if(err) {
              next(err);
          } else {
              const DB = client.db(dbName);
              DB.collection("products").find()
              .sort({_id: -1})            // sort method expect object it is used to sort ascending or descending order 1(ascending) -1(descending)(default is ascending)
              .toArray()                  //toarray is important  because without it we can not fetch all product
              .then(products => {
                  res.json(products);
              })
              .catch((errs) => {
                  next(errs);
                  // res.json(errs);
              })
            
          }
          });
      
});

router.post("/", (req, res, next) => {
    MongoClient.connect(dburl, function(err, client) {
        if(err) {
            next(err);
        } else {
            const DB = client.db(dbName);
            DB.collection("products").insertOne(req.body)
            .then(success => {
                res.json(req.body);
            })
            .catch((errs) => {
                next(errs);
                // res.json(errs);
            })
          
        }
        });

});


router.route("/:id")
.put((req, res, next) => {
    MongoClient.connect(dburl, function(err, client) {
        if(err) {
            next(err);
        } else {
            const DB = client.db(dbName);
            DB.collection("products").findOne({
                _id: new oID(req.params.id)
            })
            .then((success) => {
                 DB.collection("products").updateOne(
                     {_id: new oID(req.params.id)},
                     {
                         $set:req.body
                     },
                     {
                         upsert: true // This update the value if id is found if not it will entry
                     }
                 ).then((data) => {
                     res.json(data);
                 }).catch((errs) => {
                     res.json(errs);
                 })
            })
            .catch((errs) => {
                // next(errs);
                 res.json(errs);
            })
          
        }
        });

})
.delete((req, res, next) => {
    MongoClient.connect(dburl, function(err, client) {
        if(err) {
            next(err);
        } else {
            const DB = client.db(dbName);
            DB.collection("products").findOne({
                _id: new oID(req.params.id)
            })
            .then((success) => {
                 DB.collection("products").deleteOne(
                     {_id: new oID(req.params.id)}
                 ).then((data) => {
                     res.json(data);
                 }).catch((errs) => {
                     res.json(errs);
                 })
            })
            .catch((errs) => {
                // next(errs);
                 res.json(errs);
            })
          
        }
        });


})
.get((req, res, next) => {
    MongoClient.connect(dburl, function(err, client) {
        if(err) {
            next(err);
        } else {
            const DB = client.db(dbName);
            DB.collection("products").findOne({
                _id: oID(req.params.id)
            })
            .then(success => {
                res.json(success);
            })
            .catch((errs) => {
                //next(errs);
                 res.json(errs);
            })
          
        }
        });
})


module.exports = router;