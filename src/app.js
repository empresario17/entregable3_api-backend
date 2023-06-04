const express = require('express');
const db = require("./utils/database");
require('dotenv').config();
const initModels = require("./models/initModels");

initModels();


const userRoutes = require("../src/routes/users.routes");
const todoRoutes = require("../src/routes/todos.routes");

const PORT = process.env.PORT || 8000;


db.sync()
.then(() => console.log("Base de datos sincronizada"))
.catch((error) => console.log(error));
//Sincronizacion con base de datos


const app = express();


app.get('/',  (req, res) =>{
    res.send('Servidor Ok')
});

app.use(express.json());
 app.use(userRoutes);
 app.use(todoRoutes);
 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

 