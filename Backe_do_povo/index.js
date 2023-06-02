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

const door = 8080;

consign()  
    .include('./knexfile.js')
    .then('./api')
    .then('./routes.js')    
    .into(badabess)


badabess.listen(door, () => {                         //Carregamos servidor HTTP
    console.log(`HION DEV SERVER A EXECUTAR NA PORTA ${door}`);})


    //------ inicialicação do express duplicado
const anotherEXPRe = require('express')()
const anotherConsign = require('consign'); 

const anotherDB = require('./db');                     //Importa database relacional (Postgres)
require('dotenv').config()                      //dotenv para definir modo teste ou produção

anotherEXPRe.anotherDB = anotherDB;

const door = 8080;

anotherConsign()   
    .then('./api')
    .then('./routes.js')    
    .into(anotherEXPRe)


anotherEXPRe.listen(door, () => {                         //Carregamos servidor HTTP
    console.log(`HION DEV SERVER A EXECUTAR NA PORTA ${door}`);})