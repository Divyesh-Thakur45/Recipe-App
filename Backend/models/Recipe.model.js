const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  image: { type: String, require: true },
  title: { type: String, require: true },
  pricePerServing: { type: Number, require: true },
  summary: { type: String, require: true },
  userId: { type: String, require: true },
});

const recipeModel = mongoose.model("recipes", recipeSchema);

module.exports = recipeModel;
