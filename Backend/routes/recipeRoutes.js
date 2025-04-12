const express = require("express");
const {
  recipeData,
  recipeDataCreate,
  recipeDataGet,
  recipeDataDelete,
  recipeDataUpdate,
} = require("../controllers/recipeController");
const isAuth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");
const recipeRoute = express.Router();

recipeRoute.get("/search", recipeData);

recipeRoute.post("/create", isAuth, recipeDataCreate);

recipeRoute.get("/get/:userid", isAuth, recipeDataGet);

recipeRoute.delete("/delete/:id", isAuth, recipeDataDelete);

recipeRoute.patch("/update/:id", upload.single("image"), recipeDataUpdate);

module.exports = recipeRoute;
