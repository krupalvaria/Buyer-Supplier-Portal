const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    oProductId: mongoose.Schema.Types.ObjectId,
    oBuyerId: mongoose.Schema.Types.ObjectId,
    oSupplierId: mongoose.Schema.Types.ObjectId,
    sQuantity: Number,
    nTotalAmount: Number
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
