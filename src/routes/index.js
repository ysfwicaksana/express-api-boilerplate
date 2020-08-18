const express = require("express");
const api = express.Router();

//call validator
const validate = require("../helpers/validation");

//call controllers
const userController = require("../controllers/UserController");

//call validation rules
const { loginValidation, registerValidation } = require("../validators/user");

api.get("/", userController.index);
api.post("/login", loginValidation(), validate, userController.login);
api.post("/register", registerValidation(), validate, userController.register);

module.exports = api;
