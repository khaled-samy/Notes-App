const { join } = require('path');

const addNoteHandle = (req, res) => {
  res.sendFile(join(__dirname, '../../public/html/addNote.html'));
};

module.exports = addNoteHandle;
