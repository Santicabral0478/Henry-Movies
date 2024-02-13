const express = require('express');
const { getMovies } = require('../controllers/moviesController');

const moviesRouter = express.Router();

moviesRouter.get('/', getMovies);

module.exports = moviesRouter;
