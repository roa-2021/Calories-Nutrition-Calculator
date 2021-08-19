
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('user_name')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
