const { postData } = require('../database/queries');
const { serverError } = require('./error');

const postNoteData = (request, response) => {
  const { title, noteContent, category } = request.body;
  const categoryValue = Number(category);
  postData(title, noteContent, categoryValue)
    .then(() => response.redirect('/addNotes'))
    .catch(() => serverError(response));
};
module.exports = postNoteData;
