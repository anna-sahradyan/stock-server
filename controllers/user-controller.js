//import User from "../models/User";

const registerUser = async (req, res, next) => {
    try {
        if (!req.body.email) {
             res.status(400);
            throw new Error("Please add an  email");
        } else {
            res.send("hello register");
        }
    } catch (error) {
        next(error);
    }
};





module.exports = {
    registerUser
}