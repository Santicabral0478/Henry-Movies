const tempData = [
  {
    titulo: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    titulo: "estrella Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    titulo: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "3h",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/The_Lord_of_the_Rings%2C_T2T_%282002%29.jpg",
  },

  {
    titulo: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "3h",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://static.wikia.nocookie.net/doblaje/images/8/89/Bugslife_full.jpg/revision/latest?cb=20170318192200&path-prefix=es",
  },
];


const peliculasList = document.querySelector('.peliculas-list');

tempData.forEach(pelicula => {
    const li = document.createElement('li');

    li.innerHTML = `
        <div class="pelicula-tarjeta">
            <a href="">
                <figure class="tarjeta-banner">
                    <img src="${pelicula.poster}" alt="${pelicula.titulo}">
                </figure>
            </a>
            <div class="titulo-sub-cont">
                <a href="">
                    <h3 class="tarjeta-titulo">${pelicula.titulo}</h3>
                </a>

                <time datetime="${pelicula.year}">${pelicula.year}</time>
            </div>

            <div class="tarjeta-meta">
            <div class="genre"><span class="span-genero">${pelicula.genre.join(', ')}</span></div>
            <div class="badge badge-outline">${pelicula.director}</div>
                <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="">${pelicula.duration}</time>
                </div>
                <div class="puntuacion">
                    <ion-icon name="estrella"></ion-icon>
                    <data>${pelicula.rate}</data>
                </div>
            </div>
        </div>
    `;

    // Agregar el nuevo elemento <li> al contenedor <ul>
    peliculasList.appendChild(li);
});
