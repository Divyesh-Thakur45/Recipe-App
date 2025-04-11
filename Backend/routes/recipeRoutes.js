const express = require("express");
const recipeData = require("../controllers/recipeController");
const recipeRoute = express.Router();

recipeRoute.get("/search", recipeData);

module.exports = recipeRoute;
