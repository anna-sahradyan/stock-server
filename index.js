const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const bodyParser = require("body-parser");

app.use(bodyParser.json());


app.get("/", (req, res) => {
    return res.send("Hello World !!!")
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//?DEPLOYMENT CODE
app.get("/", (req, res) => {
    res.send("Home Page")
});

connectDB();
app.listen(PORT, () => {
    console.log(` Server is running in http://localhost:${PORT}`)
})

