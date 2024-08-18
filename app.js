const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/db");

//TODO: handle async connection
connectDB();

const app = express();
const port = config.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
