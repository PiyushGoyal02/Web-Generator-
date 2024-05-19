const express = require("express");
const route = express.Router();

const {Signup, Signin} = require("../Controllers/Auth-Controller");
const {auth, isUser, isAdmin} = require("../Middleware/Auth-Middleware");
// const {storeTileName} = require("../Controllers/QuaAnsController");
// const authMiddleware = require("../Middleware/Auth-Middleware");

// route.post("/storeTileName", authMiddleware.auth, storeTileName);

route.post("/signin", Signin);
route.post("/signup", Signup);

route.get("/user", auth, isUser, (req, res) => {
    res.json("User Profile")
})

route.get("/admin", auth, isAdmin, (req, res) => {
    res.json("Admin Profile")
})

module.exports = route;