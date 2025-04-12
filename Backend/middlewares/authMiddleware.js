var jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(404).json({ message: "Don't have Token ⚠️" });
  }
  jwt.verify(token, process.env.privateKey, async (err, decoded) => {
    if (err) {
      res.status(404).json({ message: "Token is invalide ⚠️" });
    }
    req.user = decoded.userInfo;
    next();
  });
};

module.exports = isAuth;
