const Joi = require("@hapi/joi");
const { objectId } = require("../common/customValidation");

const createOrder = {
  body: Joi.object().keys({
    sQuantity: Joi.number().required(),
    nTotalAmount: Joi.number().required(),
    oBuyerId: Joi.string().custom(objectId),
    oProductId: Joi.string().custom(objectId),
    oSupplierId: Joi.string().custom(objectId)
  })
};
module.exports = {
  createOrder
};
