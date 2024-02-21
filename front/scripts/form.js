function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("director").value = "";
    document.getElementById("year").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("poster").value = "";
}

document.getElementById("movieForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value;
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;
    if (title && director && year && duration && genre && rate && poster) {
        saveMovie({ title, director, year, duration, genre, rate, poster});
    } else {
        alert("Por favor completa todos los campos.");
    }
});

function saveMovie(movieData) {
    // Realizar una solicitud POST utilizando fetch
    fetch("http://localhost:3001/movies", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un problema al guardar la película.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert("Película guardada correctamente.");
        clearForm();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al guardar la película :/");
    });
}
