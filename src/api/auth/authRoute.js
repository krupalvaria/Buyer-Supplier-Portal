const express = require("express");
const validate = require("../../middlewares/validate");
const authController = require("./authController");
const authValidation = require("./authValidation");
const auth = require("../../middlewares/auth");

const Router = express.Router();

Router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

Router.post("/login", validate(authValidation.login), authController.login);

Router.get("/profile", auth("profile"), authController.profile);

Router.put("/editProfile", auth("editProfile"), validate(authValidation.editProfile), authController.editProfile);

module.exports = Router;
