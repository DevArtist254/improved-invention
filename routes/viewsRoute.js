import express from "express";
import { home, results, login } from "../controllers/viewCtrl.js";
import catchAsync from "../utils/catchAsync.js";

const route = express.Router();

route.get("/results", results);
route.get("/login", login);
route.get("/", home);

// route.get(
//     "/error",
//     catchAsync(async (req, res) => {
//         throw new Error("This is a test error!"); // Simulating an error
//     })
// );


export default route;