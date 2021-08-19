exports.up = function(knex) {
    return knex.schema.createTable('unit', (table) => {
        table.increments('id').primary()
        table.string('unit_type')
        table.string('abbreviation')
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('unit')
};