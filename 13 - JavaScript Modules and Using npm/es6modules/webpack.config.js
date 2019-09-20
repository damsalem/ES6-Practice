const webpack = require("webpack");
const nodeEnv = process.env.NODE_ENV || "production";

module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: "source-map",
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  }
};
