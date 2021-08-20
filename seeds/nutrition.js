
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('nutrition').insert([
        {id: 7001, calories: 50, protein: 50, fats: 40, carbs: 30, ingredients_id: 2001},
        {id: 7002, calories: 52, protein: 105, fats: 0.2, carbs: 13.8, ingredients_id: 2002}
      ]);
    // });
};
