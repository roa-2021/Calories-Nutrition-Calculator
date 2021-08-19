exports.up = function(knex) {
    return knex.schema.createTable('nutrition', (table) => {
        table.increments('id').primary()
        table.int('calories')
        table.int('protein')
        table.int('fats')
        table.int('carbs')
        table.int('ingredients_id').references('ingredients.id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('nutrition')
};