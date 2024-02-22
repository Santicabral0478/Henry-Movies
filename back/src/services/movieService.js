const Movie = require("../models/Movie");

module.exports = {
    getAllMovies: async()=>{
        const movies = await Movie.find();
        return movies;
    },

    createMovie: async(movieData)=> {
    try {
        const newMovie = new Movie(movieData);
        await newMovie.save();
        return newMovie;
    } catch (error) {
        throw error;
    }
} 
}

  // mongodb+srv://scsantiagocabral:DXFvbIiw6XWH9b1S@homeworkmoviesm2.77njpzc.mongodb.net/