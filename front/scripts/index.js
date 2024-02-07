const peliculaHtml = {
    title: "Bichos: una aventura en miniatura",
    year: 1998,
    director: "Andrew Stanton",
    duration: "1h 35m",
    genre: ["Comedia", "Aventura"],
    rate: 8.8,
    poster:
      "https://static.wikia.nocookie.net/doblaje/images/8/89/Bugslife_full.jpg/revision/latest?cb=20170318192200&path-prefix=es",
}

const peliculasList = document.querySelector('.peliculas-list');

insertarPelicula = (peliculaHtml) => {

    const li2 = document.createElement('li');

    li2.innerHTML = `
        <div class="pelicula-tarjeta card color-card">
            <a href="">
                <figure class="tarjeta-banner">
                    <img class="card-img-top" src="${peliculaHtml.poster}" alt="${peliculaHtml.title}">
                </figure>
            </a>
            <div class="padd-card">
            <div class="titulo-sub-cont">
                <a href="">
                    <h3 class="tarjeta-titulo card-title">${peliculaHtml.title}</h3>
                </a>
                <time datetime="${peliculaHtml.year}">${peliculaHtml.year}</time>
            </div>
            <div class="tarjeta-meta">
                <div class="genre"><span class="span-genero card-text">${peliculaHtml.genre.join(', ')}</span></div>
                <div class="badge badge-outline">${peliculaHtml.director}</div>
                <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="">${peliculaHtml.duration}</time>
                </div>
                <div class="puntuacion">
                    <ion-icon name="estrella"></ion-icon>
                    <data>${peliculaHtml.rate}</data>
                </div>
            </div>
            </div>
        </div>`;

    // Agregar el nuevo elemento <li> al contenedor <ul>
    peliculasList.appendChild(li2);
}

insertarPelicula(peliculaHtml);











// INSECIÓN DE TARJETAS
    $.get('https://students-api.2.us-1.fl0.io/movies', (data) =>{

    
    const peliculasList = document.querySelector('.peliculas-list');

    function crearPelicula(pelicula){
        const li = document.createElement("li");

            li.innerHTML =`
            <div class="pelicula-tarjeta card color-card">
            <a href="">
                <figure class="tarjeta-banner">
                    <img class="card-img-top" src="${pelicula.poster}" alt="${pelicula.title}">
                </figure>
            </a>
            <div class="padd-card">
            <div class="titulo-sub-cont">
                <a href="">
                    <h3 class="tarjeta-titulo card-title">${pelicula.title}</h3>
                </a>
                <time datetime="${pelicula.year}">${pelicula.year}</time>
            </div>
            <div class="tarjeta-meta">
                <div class="genre"><span class="span-genero card-text">${pelicula.genre.join(', ')}</span></div>
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
        </div>`;

        peliculasList.appendChild(li);
    }


        for (let i = 0; i < data.length; i++) {
            const pelicula = data[i];
            crearPelicula(pelicula);
        }

    })
