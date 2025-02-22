import User from "../models/userModel.js";

export const signup = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        
        res.status(200).json({
            status: "success",
            newUser
        })
    } catch (error) {
        console.log(error.message);
    }
}