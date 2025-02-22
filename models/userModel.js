import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    logo: String,
    slogan: {
        type: String,
        trim: true
    },
    socials: [
        {
            type: {
                type: String,
                enum: ["facebook", "instagram", "linkedin", "telegram", "tiktok", "whatsapp", "x", "youtube"],
                default: "whatsapp"
            },
            link: String
        }
    ],
    phoneNumber: {
        type: Number,
        validate: [validator.isMobilePhone, "Please enter a valid phone number"],
    },
    password: String
})


const User = mongoose.model("User", userSchema);

export default User;

// {
//     _id: "ObjectId",
//     name: "Muthaka Motors",
//     slogan: "trusted companion!",
//     logo: "./images/aaron-huber/alexander-hipp.jpg",
//     socials: [
//       {
//         image: "whatsapp",
//         link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
//       },
//       {
//         image: "x",
//         link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
//       },
//       {
//         image: "facebook",
//         link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
//       },
//       {
//         image: "youtube",
//         link: "http://www.youtube.com/watch?v=kUs-fH1k-aM&t=47s",
//       },
//     ],
//     phone_number: [254795263459, 254795263459],
//     location_address: [
//       {
//         _id: "5c88fa8cf4afda39709c2959",
//         description: "Lummus Park Beach",
//         type: "Point",
//         coordinates: [-80.128473, 25.781842],
//         day: 1,
//       },
//       {
//         _id: "5c88fa8cf4afda39709c2958",
//         description: "Islamorada",
//         type: "Point",
//         coordinates: [-80.647885, 24.909047],
//         day: 2,
//       },
//     ],
//     email_address: ["motors@gmail.com"],
//   }