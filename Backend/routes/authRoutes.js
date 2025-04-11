const express = require("express");
const { registerController , loginController } = require("../controllers/authController");

const userRoutes = express.Router();

userRoutes.post("/register", registerController);
userRoutes.post("/login", loginController);

module.exports = userRoutes;
