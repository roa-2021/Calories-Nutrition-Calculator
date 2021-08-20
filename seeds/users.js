
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1001, user_name: 'Kang'},
        {id: 1002, user_name: 'Max'}
      ]);
    // });
};
