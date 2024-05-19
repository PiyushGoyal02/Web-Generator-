

const express = require("express");
const {QuestionAnswer} = require("../Controllers/QuaAnsController");
const authMiddleware = require("../Middleware/Auth-Middleware");

const router = express.Router();

// This route requires authentication
router.post("/QuestionAns", authMiddleware.auth, QuestionAnswer);

module.exports = router;



// routes/questionAnsRoutes.js
// const express = require("express");
// const { QuestionAnswer, getUserById } = require("../Controllers/QuaAnsController");
// const authMiddleware = require("../Middleware/Auth-Middleware");

// const router = express.Router();

// router.post("/QuestionAns", authMiddleware.auth, QuestionAnswer);
// router.get("/user/:id", authMiddleware.auth, getUserById);

// module.exports = router;
