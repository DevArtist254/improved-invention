const path = require("path");

module.exports = {
  mode: "development",
  entry: "./public/js/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public/dist"),
  },
  watch: true,
};