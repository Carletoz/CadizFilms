const {Router} = require("express");
const {moviesController, createMovie} = require("../controllers/moviesController");
const validateMovie = require('../middleware/validateMovie')

const moviesRouter = Router();

moviesRouter.get('/', moviesController)
moviesRouter.post('/', validateMovie, createMovie )


module.exports = moviesRouter;  