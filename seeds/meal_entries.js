
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('meal_entries').insert([
        {id: 6001, meal_id: 4001, entry_id: 5001}

      ]);
    // });
};
