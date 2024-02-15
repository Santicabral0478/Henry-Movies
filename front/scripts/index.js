const renderCards = require("./rendermovies");
const axios = require("axios");

const getMovies = async () => {
    try {
        const cont = await axios.get("http://localhost:3001/movies");
        const data = cont.data;
        renderCards(data); 
    } catch (err) {
        console.log("tuvimos un error : /", err.message);
    }
}

getMovies();


// // INSECIÓN DE TARJETAS ALLAX (BLOQUE-1)
// $.get('https://students-api.2.us-1.fl0.io/movies', (data) =>{

// renderCards(data);
// })

