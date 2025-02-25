import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOpt = {
        expires: new Date(
            Date.now() + process.env.EXPIRES_IN * 24 * 60 * 1000
        ),
        httpOnly: true
    };

    res.cookie('jwt', token, cookieOpt)

    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        token,
        data: { user }
    })
}

export const signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    createSendToken(newUser, 201, res);
})

export const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new AppError("Please enter the required password or email", 400);
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        throw new AppError('Incorrect email or password', 401);
    }

    createSendToken(user, 200, res);
})