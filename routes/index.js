// routes/routes.js
const express = require("express");
const router = express.Router();
const classifyNumberController = require("../controllers/classifyNumberController");

router.get("/classify-number", classifyNumberController);

module.exports = router;
