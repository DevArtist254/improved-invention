const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.set("view engine", "pug");
app.use(express.static("public"));

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

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hey",
    message: "Hello world",
  });
});

app.get("/results", (req, res) => {
  console.log(req.query);

  res.render("results", {
    _id: "ObjectId",
    title: "BMW 330i 2011 Green",
    seller: "Muthaka Motors",
    price: "3,000,000 Ksh",
    negotiable: true,
    location: "Nairobi, Mombasa Road",
    bookmarks: 1458,
    views: 458,
    primary_specifications: [
      { usage: "Local Used" },
      { fuel_type: "Petrol" },
      { transmission: "CVT" },
    ],
    images: [
      {
        _id: "ObjectId",
        type: "primary",
        src: "./images/aaron-huber/c3.jpg",
        alt: "aaron-huber-car1",
      },
      {
        _id: "ObjectId",
        type: "secondary",
        src: "./images/aaron-huber/c2.jpg",
        alt: "aaron-huber-car2",
      },
      {
        _id: "ObjectId",
        type: "secondary",
        src: "./images/aaron-huber/c1.jpg",
        alt: "aaron-huber-car2",
      },
      {
        _id: "ObjectId",
        type: "secondary",
        src: "./images/aaron-huber/c4.jpg",
        alt: "aaron-huber-car2",
      },

      {
        _id: "ObjectId",
        type: "secondary",
        src: "./images/aaron-huber/c5.jpg",
        alt: "aaron-huber-car2",
      },
    ],
    specifications: [
      { type: "make", value: "Nissan" },
      { type: "model", value: "Bluebird" },
      { type: "year", value: "2006" },
      { type: "drivetrain", value: "Front wheel" },
      { type: "engine_size", value: "1800" },
      { type: "trim", value: "Sylphy" },
    ],
    description:
      "Looking for a reliable and stylish ride? Check out this 2002 Suzuki Jimny, a compact yet rugged SUV that's perfect for both city drives and off-road adventures. Powered by a 1328cc petrol engine paired with a manual transmission, this vehicle delivers excellent performance and control. Known for its durability and efficiency, the Jimny is a favorite among drivers who value practicality and style. This particular model is super clean, well-maintained, and ready to hit the road. Don’t miss the chance to own this versatile and trusted companion!",
    mark_unavailable: false,
    report_abuse: false,
    sellersDetails: {
      _id: "ObjectId",
      userName: "Muthaka Motors",
      slogan: "trusted companion!",
      logo: "./images/aaron-huber/alexander-hipp.jpg",
      socials: [
        {
          image: "whatsapp",
          link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
        },
        {
          image: "x",
          link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
        },
        {
          image: "facebook",
          link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
        },
        {
          image: "youtube",
          link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
        },
      ],
      phone_number: [254795263459, 254795263459],
      location_address: [
        {
          _id: "5c88fa8cf4afda39709c2959",
          description: "Lummus Park Beach",
          type: "Point",
          coordinates: [-80.128473, 25.781842],
          day: 1,
        },
        {
          _id: "5c88fa8cf4afda39709c2958",
          description: "Islamorada",
          type: "Point",
          coordinates: [-80.647885, 24.909047],
          day: 2,
        },
      ],
      email_address: ["motors@gmail.com"],
    },
  });
});

module.exports = app;
