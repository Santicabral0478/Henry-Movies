function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("director").value = "";
    document.getElementById("year").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("poster").value = "";
}

function validateForm({
    title, year, director, duration, genre, rate, poster
}) {
    if (!title || !director || !year || !duration || !genre || !rate || !poster) {
        return "Todos los datos son obligatorios";
    } 

    if (director.length < 5 || director.length > 50) {
        return "Director Incorrecto. Debe tener entre 5 y 50 caracteres.";
    }

    if (isNaN(rate) || rate < 1 || rate > 10) {
        return "Rating incorrecto. Debe ser un número entre 1 y 10.";
    }

    if (!poster.includes("https://")) {
        return "Dirección del poster incorrecta. Debe comenzar con 'https://'.";
    }

    return null;
}

document.getElementById("movieForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(","); // Convertir el string de géneros en un array
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const error = validateForm({ title, year, director, duration, genre, rate, poster });

    if (error) {
        alert(error);
    } else {
        saveMovie({ title, director, year, duration, genre, rate, poster });
    }
});

function saveMovie(movieData) {
    axios.post("http://localhost:3001/movies", movieData)
    .then(response => {
        console.log(response.data);
        alert("Película guardada correctamente ✅");
        clearForm();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al guardar la película ❌");
    });
}
