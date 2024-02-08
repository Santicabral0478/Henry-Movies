const renderCards = require("./rendermovies");

// INSECIÓN DE TARJETAS ALLAX (BLOQUE-1)
$.get('https://students-api.2.us-1.fl0.io/movies', (data) =>{

renderCards(data);
})




