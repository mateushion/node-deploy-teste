//===================================================
// importa banco de dados com base nos arquivos do KNEX FILE
// Inicia as tabelas no postgres caso elas não existam
//
// Acesso INTERNO. 
//===================================================

const config = require('./knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])               //chama a criação das tabelas no postgres
module.exports = knex

