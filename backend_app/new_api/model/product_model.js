const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
      title: {
          type: String,
          required: true,
          unique: true
      },
      category: String,
      price: {
          type: Number,
          min: 50,
          max: 200000
      },
      discount: {
          type: Number,
          min: 10,
          max: 100,
          default: 0
      },
      description: String,
      manufacture_date: Date,
}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;