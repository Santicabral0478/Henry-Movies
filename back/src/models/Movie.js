const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {type: String, required: true },
    year: {type: Number, required: true, min: [1895, "No hay peliculas previas"]},
    director: {type: String, required: true},
    duration: {type: String, required: true},
    genre: [String],
    rate: {type: Number, required: true},
    poster: {type: String, required: true}
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;

