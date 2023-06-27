const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    oSupplierId: mongoose.Schema.Types.ObjectId,
    sName: String,
    sDescription: String,
    nPrice: Number
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
