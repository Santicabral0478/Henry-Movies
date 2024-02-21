import renderCards from "./rendermovies.js"; // Asegúrate de especificar la extensión del archivo si es necesario
import axios from "axios";

const getMovies = async () => {
    try {
        const response = await axios.get("http://localhost:3001/movies");
        const data = response.data;
        renderCards(data); 
    } catch (error) {
        console.log("Tuvimos un error : /", error.message);
    }
}

getMovies();
