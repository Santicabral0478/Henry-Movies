const express = require('express');
const moviesRouter = require('./routes/moviesRouter');
const app = express();

app.use('/movies', moviesRouter);

module.exports = app;
