exports.up = function(knex) {
    return knex.schema.createTable('nutrition', (table) => {
        table.increments('id').primary()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('nutrition')
};