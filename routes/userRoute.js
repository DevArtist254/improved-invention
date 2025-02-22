import  {signup} from "./../controllers/userCtrl.js";

import express from "express";

const route = express.Router();

route.post("/signup", signup);

export default route;