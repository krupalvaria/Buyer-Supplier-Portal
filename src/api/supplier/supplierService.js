const httpStatus = require("http-status");
const { default: mongoose } = require("mongoose");
const { Product, Order } = require("../../models/index");
const ErrorHandler = require("../../utils/ErrorHandler");
const Messages = require("../../utils/messages");

const { ObjectId } = mongoose.Types;

const addProducts = async (admin, body) => {
  const { sName, sDescription, nPrice } = body;
  const checkProduct = await Product.findOne({ sName });
  if (!checkProduct) {
    return await Product.create({
      oSupplierId: admin._id,
      sName,
      sDescription,
      nPrice
    });
  }
  throw new ErrorHandler(httpStatus.UNPROCESSABLE_ENTITY, Messages.PRODUCT_ALREADY_EXIST);
};

const getProductList = async (id) => await Product.find({ oSupplierId: id });

const getOrderList = async (id) => await Order.aggregate([
  [
    {
      $match: {
        oSupplierId: ObjectId(id)
      }
    }, {
      $lookup: {
        from: "admins",
        localField: "oBuyerId",
        foreignField: "_id",
        as: "result"
      }
    }
  ]
]);

module.exports = {
  addProducts,
  getProductList,
  getOrderList
};
