//=================================================
//   Teste no docker com um backend de demonstração 
//   Feito por Leonardo T Tancredi
//=================================================

//------ inicialicação do express 
const badabess = require('express')()
const consign = require('consign'); 

const db = require('./db');                     //Importa database relacional (Postgres)
require('dotenv').config()                      //dotenv para definir modo teste ou produção

badabess.db = db;

const door = 3137;

consign() 
    .include('/.knexfile.js')
    .then('./routes.js')
    .then('./api')
    .into(badabess)


app.listen(door, () => {                         //Carregamos servidor HTTP
    console.log(`HION DEV SERVER A EXECUTAR NA PORTA ${door}`);})