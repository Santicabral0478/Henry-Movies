const express = require('express');
const moviesRouter = require('./routes/moviesRouter');
const morgan = require("morgan");
const cors = require('cors');
const app = express();

app.use(cors());


app.use(morgan("dev"))                 
  
app.use(express.json());            

app.use((req, res, next) =>{
    console.log("¿Estamos pasando por nuestro propio middleware!");
    next();
});

app.use('/movies', moviesRouter);

module.exports = app;

