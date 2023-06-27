const { ROLES } = require("./constant");

const { SUPPLIER, BUYER } = ROLES;
const roles = [SUPPLIER, BUYER];
const roleRights = new Map();

roleRights.set(roles[0], ["profile", "editProfile", "addProducts", "getProductList", "getOrderList"]);
roleRights.set(roles[1], ["profile", "editProfile", "createOrder"]);

module.exports = {
  roles,
  roleRights
};
