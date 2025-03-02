import express from "express";
import { home, results, login, errorPage } from "../controllers/viewCtrl.js";
import catchAsync from "../utils/catchAsync.js";
import { protect } from "../controllers/authCtrl.js";

const route = express.Router();

route.get("/results", results);
route.get("/login", login);
route.get("/", protect, home);

route.get(
    "/error",
    errorPage
);


export default route;