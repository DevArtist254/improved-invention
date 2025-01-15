const app = require("./app");
const dotenv = require("dotenv");


dotenv.config({path: ".envConfig"});


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Your server is running at port ${port}`);
})
