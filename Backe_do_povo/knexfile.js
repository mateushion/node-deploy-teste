//===================================================
// Inicialização do database relacional, postgres
//
// Acesso INTERNO.
// 
//===================================================

// informações importadas 
 

if(process.env.NODE_ENV =='teste'){
  module.exports = {

    client: "postgresql",
    connection: {
      database: 'mvp2023',
      user: 'postgres',
      password: 'hionmultscan'
  },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
} 


// Definindo o diretório do postgres a ser aberto
if(process.env.NODE_ENV =='aeaeae'){
    module.exports = {

      client: "postgresql",
      connection: {
        host : 'hionmvp2023.c7b2n0hl2b23.us-east-1.rds.amazonaws.com',
        port: 5432,
        database: 'hionmvp2023',
        user: 'hionplatbms',
        password: 'HionP&DbmsKinder'
    },
      pool: {
        min: 0,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }

  };
} 


