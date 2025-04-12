const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  isUser: { type: Boolean, default: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
