import express from "express";
import { home, results, login, errorPage } from "../controllers/viewCtrl.js";
import catchAsync from "../utils/catchAsync.js";

const route = express.Router();

route.get("/results", results);
route.get("/login", login);
route.get("/", home);

route.get(
    "/error",
    errorPage
);


export default route;