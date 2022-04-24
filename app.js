const express = require('express');
const aplicacion = express();
const mongoose = require('./database/mongoose');
aplicacion.listen(5500, () => {
    console.log("el puerto esta iniciando en 5500");
});