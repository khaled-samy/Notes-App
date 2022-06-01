const connection = require('../config/connection');

const getCategory = (id) => {
  const sql = {
    text: 'SELECT notes.id, title, note FROM notes WHERE category_id=$1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getCategory;