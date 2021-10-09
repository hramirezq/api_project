const express = require('express'); //de esta forma se importa en node 

require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');
//Creando el servidor express 
const app = express();
app.use(cors());
dbConection();

app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        message: 'Bienvenidos a NodeJS'
    });
})

//Para levantar el servidor 
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})