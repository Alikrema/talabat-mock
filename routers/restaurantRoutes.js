const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");
const restaurantValidators = require("../validators/restaurant");
const { restaurantAuth } = require("../middlewares/auth");

router.post(
  "/signup",
  restaurantValidators.signupValidators,
  restaurantController.signup
);

router.post(
  "/login",
  restaurantValidators.loginValidators,
  restaurantController.login
);

router.get("/", restaurantController.getAllRestaurants);

router.post(
  "/menu-item",
  restaurantAuth,
  restaurantValidators.createMenuItemValidators,
  restaurantController.createMenuItem
);

module.exports = router;
