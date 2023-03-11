const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviecontroller.js");

router.get("/movies", movieController.findMovie);
router.get("/movies/:id", movieController.findByid);
router.post("/movies", movieController.createMovies);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie)

module.exports = router;
