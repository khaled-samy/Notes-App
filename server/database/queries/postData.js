/* eslint-disable camelcase */
const connection = require('../config/connection');

const postData = (title, note, category_id) => {
  const sql = {
    text: 'INSERT INTO notes (title, note, category_id) Values ($1, $2, $3) RETURNING title,note, category_id ;',
    values: [title, note, category_id],
  };
  return connection.query(sql);
};

module.exports = postData;
