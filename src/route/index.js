const express = require("express");
const authRoute = require("../api/auth/authRoute");

const supplierRoute = require("../api/supplier/supplierRoute");

const buyerRoute = require("../api/buyer/buyerRoute");

const Router = express.Router();

Router.use("/auth", authRoute);
Router.use("/supplier", supplierRoute);
Router.use("/buyer", buyerRoute);

module.exports = Router;
