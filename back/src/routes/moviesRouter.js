const express = require('express');
const { getMovies } = require('../controllers/moviesController');
const { createMovie } = require('../controllers/moviesController');

const moviesRouter = express.Router();

moviesRouter.get('/', getMovies);

moviesRouter.post('/', createMovie);

module.exports = moviesRouter;

