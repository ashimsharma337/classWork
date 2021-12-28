const express = require("express");
const router = express.Router();
const ProductModel = require("../model/product_model");



router.route("/")
.get((req, res, next) => {
     ProductModel.find(
         {},
         {},
         function(err, product) {
             if(err) {
                 next(err)
             } else {
             res.json(product);
             }
         })
})
.post((req, res, next) => {
    const product = new ProductModel(req.body);
    product.save(function(err, success) {
        if(err) {
            next(err);
        } else {
            res.json(success);
        }
    });
});

router.route("/:id")
.get((req, res, next) => {
    ProductModel.findOne({
                 _id: req.params.id
                  }, 
                 {},
                  function(err, product) {
                      if(err) {
                          next(err)
                      } else {
                        res.json(product);
                      }
                      
                  });
})
.put((req, res, next) => {
    ProductModel.updateOne({
        _id: req.params.id
         }, 
        {
            $set: req.body
        },
        {
         upsert: true
        },
         function(err, success) {
             if(err) {
                 next(err)
             } else {
             res.json(success);
             }
         });
})
.delete((req, res, next) => {
    ProductModel.deleteOne({
        _id: req.params.id
         }, 
        {},
         function(err, success) {
             if(err) {
                 next(err)
             } else {
             res.json(success);
             }
         });
})


module.exports = router;
