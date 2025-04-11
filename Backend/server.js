const express = require("express");
var cors = require("cors");
const connection = require("./config/db");
const userRoutes = require("./routes/authRoutes");
require("dotenv").config();
var cookieParser = require("cookie-parser");
const recipeRoute = require("./routes/recipeRoutes");
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/recipes", recipeRoute);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
