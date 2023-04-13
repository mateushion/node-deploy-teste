/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


        /*
        /=============================
        / raciocínio do privilégio
        /=============================
        Usuários HiON terão privilégio em binário, modelo padrão
        Usuários não HiON terão um json com os privilégios. Quando é feito o login eu envio para o front,
        quando uma solicitação é feita (tentar deletar algo por exemplo, eu verifico o id vejo no mongo se ele pode e ai eu deleto)
                
          */
//POR CRIPTOGRAFIA EM 'privilegio', 'nivel', 'hion'
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
      table.primary(['id','vivo','congratulation','beiu','patolino']);
        table.integer('id').unsigned().notNullable().unique()
        table.string('vivo').notNullable()
        table.string('fisic_juridc').notNullable()
        table.string('congratulation').notNullable()                   
        table.string('beiu').notNullable().unique()                                     
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('dell')
        table.text('aanot')
        table.string('eeeee').defaultTo('thumbler_padrao.jpg')
        table.string('patolino').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('usuarios')
};
