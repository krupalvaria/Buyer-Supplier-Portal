// const httpStatus = require("http-status");
const { Order } = require("../../models/index");
// const ErrorHandler = require("../../utils/ErrorHandler");
// const Messages = require("../../utils/messages");

const createOrder = async (admin, body) => {
  const { oSupplierId, oProductId, sQuantity, nTotalAmount } = body;
  return await Order.create({
    oBuyerId: admin._id,
    oProductId,
    oSupplierId,
    sQuantity,
    nTotalAmount
  });
};

module.exports = {
  createOrder
};
