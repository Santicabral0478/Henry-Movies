class Movie {
    constructor(title, poster, director, year, genre, duration, rate) {
      this.title = title;
      this.poster = poster;
      this.director = director;
      this.year = year;
      this.genre = genre;
      this.duration = duration;
      this.rate = rate;
    }
  }
  
  // Función para obtener todas las películas
  const getAllMovies = () => {
    const movies = [
      new Movie('Titanic', "https://images.justwatch.com/poster/310499713/s718/titanic-1997.jpg", 'James Cameron', 1998, "3hs", 7.9),
      new Movie('Bichos', "https://es.web.img3.acsta.net/medias/nmedia/18/68/23/28/20125601.jpg", 'Andrew Stanton', 1998, "3hs", 5.6),
      new Movie('Locos de ira', "https://play-lh.googleusercontent.com/hkvIwR0G11kgTui2Tfdv2xyAq8aquQFleoJ4qx9ZX1UpW43LXs7lfnyJnRxtkfpSzNLLFA", 'Peter Segal', 2003, "2.4hs", 5.6)
    ];
    return movies;
  };
  
  module.exports = {
    getAllMovies,
    Movie
  };