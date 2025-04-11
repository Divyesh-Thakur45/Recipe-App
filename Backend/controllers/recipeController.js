const axios = require("axios");
require("dotenv").config();

const recipeData = async (req, res) => {
  const query  = req.query;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          query,
          number: 100,
          apiKey: process.env.SPOONACULAR_API_KEY,
          addRecipeInformation: true,
        }
      }
    );
    res.status(200).json({ message: response.data, success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};
module.exports = recipeData;
