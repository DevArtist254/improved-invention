import  {login, signup} from "./../controllers/authCtrl.js";

import express from "express";

const route = express.Router();

route.post("/signup", signup);
route.get("/login", login);

export default route;