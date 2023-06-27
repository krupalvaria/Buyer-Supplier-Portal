const Joi = require("@hapi/joi");
const { objectId } = require("../common/customValidation");

const addProducts = {
  body: Joi.object().keys({
    oSupplierId: Joi.string().custom(objectId),
    sName: Joi.string().required(),
    sDescription: Joi.string().required(),
    nPrice: Joi.number().required()
  })
};

module.exports = {
  addProducts
};
