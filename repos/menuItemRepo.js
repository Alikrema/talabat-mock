const MenuItem = require("../models/MenuItem");

const createMenuItem = async (menuItem) => {
  try {
    const newMenuItem = new MenuItem(menuItem);
    return await newMenuItem.save();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMenuItem,
};
