const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect("mongodb+srv://scsantiagocabral:DXFvbIiw6XWH9b1S@homeworkmoviesm2.77njpzc.mongodb.net/homeworkDataBase");
        console.log("Conexión a la base de datos establecida correctamente");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
};

module.exports = dbCon;
