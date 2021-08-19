exports.up = function(knex) {
    return knex.schema.createTable('meal', (table) => {
        table.increments('id').primary()
        table.string('meal_type')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('meal')
};