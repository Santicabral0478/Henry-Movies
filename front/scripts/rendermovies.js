// const renderCards = (data) => {
//     const peliculasList = document.querySelector('.peliculas-list-js');

//     function crearPelicula(pelicula) {
//         const li = document.createElement("li");

//         li.innerHTML = `
//             <div class="pelicula-tarjeta card color-card">
//                 <a href="">
//                     <figure class="tarjeta-banner">
//                         <img class="card-img-top" src="${pelicula.poster}" alt="${pelicula.title}">
//                     </figure>
//                 </a>
//                 <div class="padd-card">
//                     <div class="titulo-sub-cont">
//                         <a href="">
//                             <h3 class="tarjeta-titulo card-title">${pelicula.title}</h3>
//                         </a>
//                         <time datetime="${pelicula.year}">${pelicula.year}</time>
//                     </div>
//                     <div class="tarjeta-meta">
//                         <div class="badge badge-outline">${pelicula.director}</div>
//                         <div class="duration">
//                             <ion-icon name="time-outline"></ion-icon>
//                             <time datetime="">${pelicula.duration}</time>
//                         </div>
//                         <div class="puntuacion">
//                             <ion-icon name="estrella"></ion-icon>
//                             <data>${pelicula.rate}</data>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;

//         peliculasList.appendChild(li);
//     }

//     for (let i = 0; i < data.length; i++) {
//         const pelicula = data[i];
//         crearPelicula(pelicula);
//     }
// }

// module.exports = renderCards;


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


const renderCards = (data) => {
    const peliculasList = document.querySelector('.peliculas-list-js');

    function crearPelicula(pelicula) {
        const li = document.createElement("li");

        // Convertir el array de géneros en una cadena separada por comas
        const generos = pelicula.genre.join(', ');

        li.innerHTML = `
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
                        <div class="badge badge-outline">${pelicula.director}</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="">${pelicula.duration}</time>
                        </div>
                        <div class="puntuacion">
                            <ion-icon name="estrella"></ion-icon>
                            <data>${pelicula.rate}</data>
                        </div>
                        <!-- Agregar el campo de géneros -->
                        <div class="generos">
                            <span>Géneros: ${generos}</span>
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
}

module.exports = renderCards;
