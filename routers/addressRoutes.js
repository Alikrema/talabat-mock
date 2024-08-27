const express = require("express");
const router = express.Router();
const { validateAddress } = require("../validators/address");
const addressController = require("../controllers/addressController");

router.post("/", validateAddress, addressController.createAddress);

module.exports = router;
