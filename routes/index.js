const express = require("express");
const router = express.Router();
const movieRouter = require("./movie.js")

router.use(movieRouter);

module.exports = router;
