
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('entry').insert([
        {id: 5001, meal_type: 'pancakes', unit_id: 3001, ingredients_id: 2001, serving: 1}
      ])
    // });
};
