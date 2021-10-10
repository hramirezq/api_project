const express = require('express'); //de esta forma se importa en node 
const apiRouter = require('./routes/index')

require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');
//Creando el servidor express 
const app = express();
app.use(cors());
app.use(express.json());
dbConection();

app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        message: 'Bienvenidos a NodeJS'
    });
})

app.use('/api/v1', apiRouter);
//Para levantar el servidor 
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})