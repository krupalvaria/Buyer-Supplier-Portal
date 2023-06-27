const Joi = require("@hapi/joi");
const { password } = require("../common/customValidation");

const register = {
  body: Joi.object().keys({
    sEmail: Joi.string().required().email(),
    sPassword: Joi.string().custom(password),
    sName: Joi.string().required(),
    sUserType: Joi.string().required()
  })
};

const login = {
  body: Joi.object().keys({
    sEmail: Joi.string().required().email(),
    sPassword: Joi.string().custom(password)
  })
};

const editProfile = {
  body: Joi.object().keys({
    sName: Joi.string()
  })
};

module.exports = {
  register,
  login,
  editProfile
};
