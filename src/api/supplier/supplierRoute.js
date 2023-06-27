const express = require("express");
const validate = require("../../middlewares/validate");
const supplierController = require("./supplierController");
const supplierValidation = require("./supplierValidation");
const auth = require("../../middlewares/auth");

const Router = express.Router();

Router.post("/addProducts", auth("addProducts"), validate(supplierValidation.addProducts), supplierController.addProducts);

Router.get("/getProductList", auth("getProductList"), supplierController.getProductList);

Router.get("/getOrderList", auth("getOrderList"), supplierController.getOrderList);

module.exports = Router;
