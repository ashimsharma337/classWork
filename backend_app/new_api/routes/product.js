const express = require("express");

const router = express.Router();
const ProductController = require("../controller/product_controller");
const uploader = require("../middleware.js/uploader");


const productController = new ProductController();

router.route("/")
.get(productController.getAllproducts)
.post(uploader.single("image"), productController.addProduct); 
// to upload multiple image uploader.array("image", number of image(if empty load all))....see product_controller.js

router.route("/:id")
.get(productController.getProductById)
.put(uploader.single("image"), productController.updateProductById)
.delete(productController.deleteProductById)


module.exports = router;
