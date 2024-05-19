const express = require("express");
const route = express.Router();

const {storeTileName} = require("../Controllers/QuaAnsController");
const authMiddleware = require("../Middleware/Auth-Middleware");

route.post("/storeTileName", authMiddleware.auth, storeTileName);

module.exports = route;