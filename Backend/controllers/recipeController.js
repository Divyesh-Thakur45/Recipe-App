const axios = require("axios");
const recipeModel = require("../models/Recipe.model");
require("dotenv").config();

const recipeData = async (req, res) => {
  const query = req.query;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          query,
          number: 100,
          apiKey: process.env.SPOONACULAR_API_KEY,
          addRecipeInformation: true,
        },
      }
    );
    res.status(200).json({ message: response.data, success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};

const recipeDataCreate = async (req, res) => {
  const { image, title, pricePerServing, summary } = req.body;
  console.log(req.user._id);
  try {
    if (!image && !title && !pricePerServing && !summary) {
      res
        .status(404)
        .json({ message: "All field are required ⚠️", success: false });
    }
    const userData = await recipeModel.create({
      image,
      title,
      pricePerServing,
      summary,
      userId: req.user._id,
    });
    res.status(200).json({ message: userData, success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};

const recipeDataGet = async (req, res) => {
  const { userid } = req.params;
  try {
    if (!userid) {
      res
        .status(404)
        .json({ message: "Login Or Signup your account ⚠️", success: false });
    }
    const isValide = await recipeModel.find({ userId: userid });
    if (isValide.length <= 0) {
      res
        .status(404)
        .json({ message: "No data in favorites ⚠️", success: false });
    }
    return res.status(200).json({ message: isValide, success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};

const recipeDataDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await recipeModel.findById({ _id: id });
    if (!isExist) {
      res
        .status(404)
        .json({ message: "User is not available ⚠️", success: false });
    }
    await recipeModel.findByIdAndDelete(isExist);
    return res
      .status(200)
      .json({ message: "Deleted Successfully 🎉", success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};

const recipeDataUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await recipeModel.findById({ _id: id });
    if (!isExist) {
      res
        .status(404)
        .json({ message: "User is not available ⚠️", success: false });
    }
    await recipeModel.findByIdAndUpdate(isExist, {
      ...req.body,
      image: req.file?.originalname,
    });
    return res
      .status(200)
      .json({ message: "Updated Successfully 🎉", success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};
module.exports = {
  recipeData,
  recipeDataCreate,
  recipeDataGet,
  recipeDataDelete,
  recipeDataUpdate,
};
