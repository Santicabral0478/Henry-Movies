const movieService = require('../services/movieService');

const getMovies = (req, res) => {
  const movies = movieService.getAllMovies(); // Obtener todas las películas del servicio
  res.status(200).json(movies); // Enviar las películas como respuesta en formato JSON
};

module.exports = { getMovies };