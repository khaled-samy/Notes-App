const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT notes.id, categories.category, notes.title, notes.note FROM notes JOIN categories  ON (categories.id = notes.category_id);',
  };
  return connection.query(sql);
};

module.exports = getData;
