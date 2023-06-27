const httpStatus = require("http-status");
const { handleError } = require("../../middlewares/error");
const Messages = require("../../utils/messages");
const createResponse = require("../../utils/response");
const buyerService = require("./buyerService");

const createOrder = async (req, res) => {
  try {
    const create = await buyerService.createOrder(req.admin, req.body);
    createResponse(res, httpStatus.OK, Messages.CREATE_ORDER, create);
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = {
  createOrder
};
