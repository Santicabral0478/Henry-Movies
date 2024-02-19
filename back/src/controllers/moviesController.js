const movieService = require('../services/movieService');

const getMovies = async (req, res) => {
  try {
      const movies = await movieService.getAllMovies(); // Espera a que se resuelva la promesa
      res.status(200).json(movies); // Enviar las películas como respuesta en formato JSON
  } catch (error) {
      console.error("Error al obtener películas:", error);
      res.status(500).json({ error: "Error al obtener películas" });
  }
};

module.exports = { getMovies };
