
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 2001, ingredients_name: 'sugar'}

      ]);
    // });
};
