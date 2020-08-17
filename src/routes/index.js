const express = require("express");
const api = express.Router();
const dotenv = require("dotenv");
dotenv.config();

//call controllers
const UserController = require("../controllers/UserController");

api.get("/", UserController.listUser);

// api.get("/", (req, res) => {
//   res.status(200).json({ data: process.env.APP_NAME });
// });

module.exports = api;
