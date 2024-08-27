const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");
const driverValidators = require("../validators/driver");

router.post("/signup", driverValidators.createDriver, driverController.signup);

router.post("/login", driverValidators.loginDriver, driverController.login);

module.exports = router;
