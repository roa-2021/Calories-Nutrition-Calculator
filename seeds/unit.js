
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('unit').insert([
        {id: 3001, unit_type: 'gram', abbreviation: 'g'},
        {id: 3002, unit_type: 'cup', abbreviation: 'cup'}
      ]);
    // });
};
