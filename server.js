import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({path: ".envConfig"});

const port = process.env.PORT || 3000;

async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB);

        console.log("Connected to the database....");
        
    } catch (error) {
        console.log(error.message);
    }
}

dbConnect();

app.listen(port, () => {
    console.log(`Your server is running at port ${port}`);
})
