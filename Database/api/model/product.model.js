const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    category: String,
    price: Number,
    discount: Number,
    manufacturedate: Date
}, {
    timestamps: true
});

//timestamps: This will add the createdAt and updatedAt fields on each record create, and is a second parameter of mongoose schema,


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;