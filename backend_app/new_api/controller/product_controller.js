const ProductModel = require("../model/product_model");


class ProductController {
      
getAllproducts(req, res, next) {
    ProductModel.find()
    .populate("cat_id")
    .populate("sub_cat_id")
    .then((products) => {
        res.json({
            result: products,
            status: 200,
            msg: "List success"
        })
    })
    .catch((error) => {
        res.json({
            result: (JSON.parse(error)),
            status: 400,
            msg: "Error while fetching data."
        })
    })
}

addProduct(req, res, next) {
    // console.log("req body", req.body);
    // console.log("req file", req.file);
    if(req.files) {
        // array
        let image = [];
        image = req.files.map((o) => o.filename);
        // console.log("Image: ", image);
        req.body.image = image;
        // req.body.image = req.file.filename;
    }

    // console.log(req.files);

    // if multiple image then.....req.files.map(object => object.filename)
    // console.log(req.body.image);
    const product = new ProductModel(req.body);
    
    // object mapping(body mapping)
    // product.title = req.body.name
    
    product.save(function(err, success) {
        if(err) {
            res.json({
                result: null,
                status:  400,
                msg: JSON.stringify(err)
            })
        } else {
            res.json({
                result: product,
                status:  200,
                msg: "Product created successfully."
            });
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