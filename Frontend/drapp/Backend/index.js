const cors = require('cors');
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// CORS Options
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Connect to Database
const dataBaseConnect = require("./Config/dataBaseConnect");
dataBaseConnect.DBConnect();

// User Routes
const userRoute = require("./Routes/UserRoute");
const QuaAns = require ("./Routes/QuaAnsRoute");
const tilename = require("./Routes/TileNameRoute");

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/qua",QuaAns);
app.use("/api/v1/tile", tilename);

app.get("/", (req, res) => {
    res.send("Default Route Starting");
});

app.listen(PORT, () => {
    console.log(`Server Starting PORT ${PORT}`);
});
