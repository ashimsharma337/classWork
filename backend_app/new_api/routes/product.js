const express = require("express");

const router = express.Router();
const ProductController = require("../controller/product_controller");
const uploader = require("../middleware.js/uploader");
const isLoggedIn = require("../middleware.js/isLoggedIn");
const isAdmin = require("../middleware.js/isAdmin");


const productController = new ProductController();

router.route("/")
.get(productController.getAllproducts)
.post(uploader.single("image"), productController.addProduct); 
// to upload multiple image uploader.array("image", number of image(if empty load all))....see product_controller.js

router.route("/:id")
.get(productController.getProductById)
.put(uploader.single("image"), productController.updateProductById)
.delete(productController.deleteProductById)

// Using Admin 
// router.route('/')
//     .get(productController.getAllProducts)
//     .post([isLoggedIn, isAdmin], uploader.single('image'),productController.addProduct);

// router.route("/:id")
//     .get(productController.getProductById)
//     .put([isLoggedIn, isAdmin],uploader.single('image'), productController.updateProduct)
//     .delete([isLoggedIn, isAdmin],productController.deleteProduct);


module.exports = router;
