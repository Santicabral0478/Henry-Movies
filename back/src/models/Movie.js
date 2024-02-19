const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;

