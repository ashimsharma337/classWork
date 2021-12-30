const express = require("express");

const router = express.Router();
const ProductModel = require("../model/product_model");
const ProductController = require("../controller/product_controller");
const uploader = require("../middleware.js/uploader");


const productController = new ProductController();

router.route("/")
.get((req, res, next) => { productController.getAllproducts(req, res, next); })
.post(uploader.single("image"), (req, res, next) => { productController.addProduct(req, res, next); });

router.route("/:id")
.get((req, res, next) => { productController.getProductById(req, res, next); })
.put(uploader.single("image"), (req, res, next) => { productController.updateProductById(req, res, next); })
.delete((req, res, next) => { productController.deleteProductById(req, res, next); })


module.exports = router;
