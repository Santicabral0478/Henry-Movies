const express = require('express');
const moviesRouter = require('./routes/moviesRouter');
const morgan = require("morgan");
const cors = require("cors");
const app = express();


app.use(morgan("dev"))                  //------> Imprimira en consola informacion referente al recorrido de la req(request) ej: en que ruta, bajo que metodo, estado de respuesta (200 en este caso).

const corsOptions = {
    origin: "http://127.0.0.1:8080",
};
  
app.use(cors(corsOptions));

app.use(express.json());                //------>Convierte la informacion en .json--> a .js (Libreria propia de -express-).

app.use((req, res, next) =>{
    console.log("¿Estamos pasando por nuestro propio middleware!");
    next();
});

app.use('/movies', moviesRouter);

module.exports = app;
