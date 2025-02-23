import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    logo: String,
    slogan: {
        type: String,
        trim: true
    },
    socials: [
        {
            image: {
                type: String,
                enum: ["facebook", "instagram", "linkedin", "telegram", "tiktok", "whatsapp", "x", "youtube"],
                default: "whatsapp"
            },
            link: String
        }
    ],
    phoneNumber: [{
        type: Number,
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-KE");
            },
            message:  "Please enter a valid kenya number"
        },
    }],
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        select: false,
        minlength: 8
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    location: [
        {
            type: {
                type: String,
                default: 'Point',
                enum: ['Point']
            },
            coordinates: [Number],
            address: String,
            description: String,
            primary: Boolean
        }
    ],
    role: {
        type: String,
        enum: ['seller', 'buyer', 'user'],
        default: 'seller'
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    
    next();
})

userSchema.pre('save', function (next) {
    //Only run if the document is not new 
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
})

userSchema.methods.correctPassword = async function (candidatePass, userPass) {
    return await bcrypt.compare(candidatePass, userPass);
}


const User = mongoose.model("User", userSchema);

export default User;

