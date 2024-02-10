

// const axios = require("axios");

// const getMovies = async () => {
//     try{
//         const data = await axios.get("https://rickandmortyapi.com/api/character/331");
//         console.log("Estamos por intentar algunas operaciones:");
//         console.log(data.data);
//     }catch(err){
//         console.log("tuvimos un error : /");
//         console.log(err.message);
//     }
// }

// INSECIÓN DE TARJETAS ALLAX (BLOQUE-2)
const renderCards = (data)=>{
        const peliculasList = document.querySelector('.peliculas-list-js');

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
}



module.exports = renderCards;