exports.up = function(knex) {
    return knex.schema.createTable('entry', (table) => {
    table.increments('id').primary()
        table.string('meal_type').references('meal.meal_type')
        table.datetime('date_time')
        table.int('unit_id').references('unit.id')
        table.int('ingredients_id').references('ingredients.id')
        table.int('amounts')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('entry')
};