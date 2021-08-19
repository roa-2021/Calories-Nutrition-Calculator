
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('nutrition').insert([
        {id: 7001, calories: 50, protein: 50, fats: 40, carbs: 30, ingredients_id: 2001}
      ]);
    // });
};
