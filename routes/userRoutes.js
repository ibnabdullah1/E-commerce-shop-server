const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getUserProfile } = require("../controllers/userController");

router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
