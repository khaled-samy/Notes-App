/* eslint-disable camelcase */
const connection = require('../config/connection');

const deleteData = (id) => {
  const sql = {
    text: 'DELETE FROM notes WHERE id=$1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteData;
