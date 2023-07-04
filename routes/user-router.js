const express = require("express");
const {registerUser, loginUser, logOut, getUser, loginStatus} = require("../controllers/user-controller");
const protect = require("../middleware/authMiddlware");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logOut);
router.get("/getuser",protect, getUser);
router.get("/loggedin",loginStatus);


module.exports = router;