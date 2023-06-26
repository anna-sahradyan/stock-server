const express = require("express");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//?DEPLOYMENT CODE

connectDB();
app.listen(PORT, () => {
    console.log(` Server is running in http://localhost:${PORT}`)
})

