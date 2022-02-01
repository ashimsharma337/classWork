const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    review: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
}, {
    timestamps: true
})

const ProductSchema = new mongoose.Schema({
      title: {
          type: String,
          required: true,
          unique: true
      },
      cat_id: {
          type: mongoose.Types.ObjectId,
          ref: "Category",
          default: null
      },
      sub_cat_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
      },
      price: {
          type: Number,
          min: 1
      },
      discount: {
          type: Number,
          min: 0,
          max: 100,
          default: 0
      },
      description: String,
      image: [String],
      status: {
        type: String,
        enum: ['inactive', 'active'],
        default: 'inactive'
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    review: [ReviewSchema]
}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;