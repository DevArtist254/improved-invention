exports.getVehicle = (req, res, next) => {
  res.status(200).json({
    _id: "ObjectId",
    title: "BMW 330i 2011 Green",
    vehicle_brand: "BMW",
    vehicle_model: "330i",
    color: "Green",
    price: "3,000,000 Ksh",
    negotiable: true,
    location: {
      _id: "5c88fa8cf4afda39709c2959",
      description: "Nairobi, Mombasa Road",
      type: "Point",
      coordinates: [-80.128473, 25.781842],
      open: true,
    },
    bookmarks: 1458,
    views: 458,
    primary_specifications: [
      { type: "usage", value: "Local Used" },
      { type: "fuel_type", value: "Petrol" },
      { type: "transmission", value: "Automatic" },
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
      name: "Muthaka Motors",
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
};
