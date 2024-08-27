const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const customerValidators = require("../validators/customer");

router.post(
  "/signup",
  customerValidators.createCustomer,
  customerController.signup
);

router.post(
  "/login",
  customerValidators.loginCustomer,
  customerController.login
);

module.exports = router;
