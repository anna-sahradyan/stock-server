const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
};
const registerUser = asyncHandler(async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            res.status(400);
            throw new Error("Please fill in all required fields");
        }
        if (password.length < 6) {
            res.status(400);
            throw new Error("Password must be up to 6 characters");
        }
        const userExist = await User.findOne({email});
        if (userExist) {
            res.status(400);
            throw new Error("Email has already been registered");
        }


        //?create new user
        const user = await User.create({
            name,
            email,
            password,
        });
        //? generate Token
        const token = generateToken(user._id);
        //? Send HTTP-only cookie
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), //!1 day
            sameSite:"none",
            secure:true
        });
        if (user) {
            const {_id, name, email, photo, phone, bio} = user
            res.status(201).json({
                _id,
                name,
                email,
                photo,
                phone,
                bio,
                token

            });
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }

    } catch (err) {
        next(err);
    }
});


module.exports = {
    registerUser
}