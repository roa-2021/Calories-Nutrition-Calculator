exports.up = function(knex) {
    return knex.schema.createTable('meal_entries', (table) => {
    table.increments('id').primary()
    table.int('meal_id').references('meal.id')
    table.int('entry_id').references('entry.id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('meal_entries')
};