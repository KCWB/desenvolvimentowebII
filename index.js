'use strict'

//Declarar as depêndencias do arquivo

const express = require('express');
const app = express();



//Definir a porta que o servidor vai escutar
const port = 1234;

//Confirgurando o servidor para escutar a porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});