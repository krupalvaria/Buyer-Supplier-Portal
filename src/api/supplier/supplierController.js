const httpStatus = require("http-status");
const { handleError } = require("../../middlewares/error");
const Messages = require("../../utils/messages");
const createResponse = require("../../utils/response");
const supplierService = require("./supplierService");

const addProducts = async (req, res) => {
  try {
    const products = await supplierService.addProducts(req.admin, req.body);
    createResponse(res, httpStatus.OK, Messages.ADD_PRODUCTS, products);
  } catch (error) {
    handleError(error, res);
  }
};

const getProductList = async (req, res) => {
  try {
    const products = await supplierService.getProductList(req.admin._id);
    createResponse(res, httpStatus.OK, Messages.GET_PRODUCTS_LIST, products);
  } catch (error) {
    handleError(error, res);
  }
};

const getOrderList = async (req, res) => {
  try {
    const orderLists = await supplierService.getOrderList(req.admin._id);
    createResponse(res, httpStatus.OK, Messages.GET_ORDER_LIST, orderLists);
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = {
  addProducts,
  getProductList,
  getOrderList
};
