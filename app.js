import express from "express";
import cors from "cors";

const app = express();

// import vehicleRoute from "./routes/vehiclesRoute";
import userRoute from "./routes/userRoute.js";
import viewRoute from "./routes/viewsRoute.js";
import errorHandler from "./controllers/errCtrl.js";

app.use(cors());

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.json({ limit: '10kb' }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'none';", // Block all sources by default
      "script-src 'self' 'unsafe-eval' https://unpkg.com/leaflet@1.9.4/dist/leaflet.js;", // Allow scripts from self and Leaflet.js, enabling 'unsafe-eval'
      "style-src 'self' 'unsafe-inline' https://unpkg.com/leaflet@1.9.4/dist/leaflet.css https://fonts.googleapis.com;", // Allow inline styles, Leaflet CSS, and Google Fonts styles
      "font-src 'self' https://fonts.gstatic.com;", // Allow fonts from self and Google Fonts
      "img-src 'self' data: https://*;", // Allow images from self, data URIs, and any HTTPS source
      "connect-src 'self';", // Allow network requests to self
      "frame-src 'none';", // Disallow embedding content in iframes
      "base-uri 'self';", // Restrict <base> to same-origin
      "form-action 'self';", // Restrict forms to same-origin
    ].join(" ")
  );

  next();
});


app.use("/", viewRoute);
// app.use("/app/v1/vehicles", vehicleRoute);
app.use("/app/v1/user", userRoute);

//global error handler
app.use(errorHandler);

export default app;


