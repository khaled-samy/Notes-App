require('env2')('.env');
const { Pool } = require('pg');

let URL = '';

if (process.env.NODE_ENV === 'test') {
  URL = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === 'deploy') {
  URL = process.env.DATABASE_URL;
} else {
  URL = process.env.DB_URL;
}

if (!URL) {
  throw new Error({ message: 'Error when connect DataBase' });
}
const connection = new Pool({
  connectionString: URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = connection;
