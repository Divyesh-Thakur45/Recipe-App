const userModel = require("../models/User.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name & !email & !password) {
      res
        .status(404)
        .json({ message: "Please fill all fields ❌", success: false });
    }
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      res
        .status(404)
        .json({ message: "Email is all ready exist ⚠️", success: false });
    }
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        res
          .status(404)
          .json({ message: "Error in creating password ❌", success: false });
      }
      await userModel.create({ name, email, password: hash });
      res
        .status(200)
        .json({ message: "User created successfully 🎉", success: true });
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something Went wrong !⚠️", success: false });
    console.log(error);
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email & !password) {
      res
        .status(404)
        .json({ message: "Please fill all fields ❌", success: false });
    }
    const isExist = await userModel.findOne({ email });
    if (!isExist) {
      res.status(404).json({ message: "Email is not found ⚠️" });
    }
    bcrypt.compare(password, isExist.password, async (err, result) => {
      if (err) {
        res
          .status(404)
          .json({ message: "something want wrong ❌", success: false });
      }
      if (result) {
        jwt.sign(
          { userInfo: isExist },
          process.env.privateKey,
          async (err, token) => {
            if (err) {
              res
                .status(404)
                .json({ message: "something want wrong ❌", success: false });
            }
            res.cookie("token", token, {
              httpOnly: true, // prevents client-side JS from accessing the cookie
              maxAge: 24 * 60 * 60 * 1000, // 1 day
              secure: false, // set to true if using HTTPS
              sameSite: "lax", // helps prevent CSRF
            });
            return res
              .status(200)
              .json({ message: "Login Successfully 🎉", success: true });
          }
        );
      }
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something want wrong ⚠️", success: false });
  }
};
module.exports = { registerController, loginController };
