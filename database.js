var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'user',
      password : 'password',
      database : 'knexjs'
    }
  });

  module.exports = knex;
