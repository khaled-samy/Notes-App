const { deleteData } = require('../database/queries');

const deleteNote = (request, response) => {
  // eslint-disable-next-line no-console
  deleteData(request.params.id)
    .then(() => {
      response.redirect('/');
    })
    .catch(() => {
      response.json({ massage: 'server error!!!' });
    });
};
module.exports = deleteNote;
