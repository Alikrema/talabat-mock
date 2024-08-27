const addressService = require("../services/addressService");
const { validationResult } = require("express-validator");

const createAddress = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newAddress = await addressService.createAddress(req.body);
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAddress,
};
