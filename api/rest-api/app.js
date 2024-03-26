const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

app.use("/users", userRoutes);

module.exports = app;
