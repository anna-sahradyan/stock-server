const express = require("express");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user-router");
const app = express();


//?middlewares
app.use(bodyParser.json());
app.use(cors(
    {origin: true}
));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//?Router middleware
app.use("/api/users", userRouter);
//?DEPLOYMENT CODE
app.get("/", (req, res) => {
    res.send("Home page")
})


connectDB();


app.listen(PORT, () => {
    console.log(` Server is running in http://localhost:${PORT}`)
})

