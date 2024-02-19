const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(
    res=>{
        app.listen(3001, ()=>{
            console.log("servidor escuchando en el puerto 3001");
        });
    }
)

