
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('meal').insert([
        {id: 4001, meal_type: 'pancakes'}
      ]);
    // });
};
