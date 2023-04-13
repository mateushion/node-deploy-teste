/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cliente_fe', table => {
        table.integer('id_fe',{primaryKey:true,foreignKey: true}).unsigned().notNullable().unique()
        table.foreign('id_fe').references('id').inTable('usuarios');        
        table.string('ve')
        table.string('ae')
        table.timestamp('criadoFuncEm').defaultTo(knex.fn.now());
        table.timestamp('dellFuncAt')
        table.text('anotFunc')        
        table.string('addr_foto_func').defaultTo('thumbler_padrao.jpg')
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cliente_fe')
};
