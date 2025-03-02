import { promisify } from 'util';
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h'});
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOpt = {
        expires: new Date(
            Date.now() + process.env.EXPIRES_IN * 24 * 60 * 1000
        ),
        httpOnly: true
    };

    res.cookie('jwt', token)

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

export const protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.cookies.jwt) token = req.cookies.jwt;

    //Throw a error if no token availa
    if(!token) throw new AppError("Login to gain access", 401);

    //check tokens vaildty
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    if(!currentUser) {
        throw new AppError('User does not exist', 401);
    }

    //Grant access
    res.locals.user = currentUser;
    next();
})