// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   password: 'root',
//   host: 'localhost',
//   port: 5432,
//   database: 'node_postgres',
// });

// module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '51.250.80.205',
  database: 'postgres',
  password: 'Jn&hjRt',
  port: 5432,
});

module.exports = pool;
