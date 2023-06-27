const express = require("express");
const validate = require("../../middlewares/validate");
const buyerController = require("./buyerController");
const buyerValidation = require("./buyerValidation");
const auth = require("../../middlewares/auth");

const Router = express.Router();

Router.post("/createOrder", auth("createOrder"), validate(buyerValidation.createOrder), buyerController.createOrder);

module.exports = Router;
