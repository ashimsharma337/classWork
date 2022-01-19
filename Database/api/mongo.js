const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./mongoose_db_init");        // for the connection of mongoose
const ProductModel = require("../api/model/product.model");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/mongopost", (req, res) => {
    res.send("mongo is connected");
});

app.post("/mongopost", (req, res) => {
    const product = new ProductModel(req.body);
    product.save(function(err, success) {      // insert object in the database
           if(err) {
               console.log("Error:>>", err);
               res.json(err);
           } else {
               res.json(success);
           }
    });       

    // console.log(product);
    
});


app.listen(2000, console.log("app is listening at port 2000"));