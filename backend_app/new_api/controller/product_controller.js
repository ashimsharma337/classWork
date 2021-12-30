const ProductModel = require("../model/product_model");


class ProductController {
      
getAllproducts(req, res, next) {
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
}

addProduct(req, res, next) {
    // console.log("req body", req.body);
    // console.log("req file", req.file);
    if(req.file) {
        req.body.image = req.file.filename;
    }
    // console.log(req.body.image);
    const product = new ProductModel(req.body);
    
    // object mapping(body mapping)
    // product.title = req.body.name
    
    product.save(function(err, success) {
        if(err) {
            next(err);
        } else {
            res.json(success);
        }
    });
}

getProductById(req, res, next) {
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
}

updateProductById(req, res, next) {
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
}

deleteProductById(req, res, next) {
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
}
}




module.exports = ProductController;