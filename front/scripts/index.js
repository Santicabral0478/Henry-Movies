
// INSECIÓN DE TARJETAS
    $.get('https://students-api.2.us-1.fl0.io/movies', (data) =>{

    
    const peliculasList = document.querySelector('.peliculas-list');

    function crearPelicula(pelicula){
        const li = document.createElement("li");

            li.innerHTML =`
            <div class="pelicula-tarjeta">
                <a href="">
                    <figure class="tarjeta-banner">
                        <img src="${pelicula.poster}" alt="${pelicula.title}">
                    </figure>
                </a>
                <div class="titulo-sub-cont">
                    <a href="">
                        <h3 class="tarjeta-titulo">${pelicula.title}</h3>
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
            </div>`;

        peliculasList.appendChild(li);
    }


        for (let i = 0; i < data.length; i++) {
            const pelicula = data[i];
            crearPelicula(pelicula);
        }

    })
