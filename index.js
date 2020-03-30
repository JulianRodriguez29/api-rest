'use strict' 
//importacion de express, lee en la carpeta donde esta node modules y lo importa

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true},(err, res) => {
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establcida...')
    //ponemos el puerto a la escucha con un mensaje
    app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
})

})


