const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.set("view engine", "pug");
app.use(express.static("public"));

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'none' script-src 'self' data https://apis.google.com 'unsafe-eval' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hey",
    message: "Hello world",
  });
});

app.get("/results", (req, res) => {
  console.log(req.query);

  res.render("results", {
    message: req.query.search,
  });
});

module.exports = app;
