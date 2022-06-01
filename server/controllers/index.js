const { join } = require('path');
const express = require('express');
const { getNoteData, getCategoryData } = require('./getData');
const postNoteData = require('./postData');
const deleteNote = require('./deleteData');
const { pageNotFound, serverError } = require('./error');

const addNoteHandle = require('./addNoteHandle');

const router = express.Router();

router.get('/addNotes', addNoteHandle);
// html/addNote.html
router.get('/', (request, response) => {
  response.sendFile(join(__dirname, '..', 'public', 'index.html'));
});
router.get('/getData', getNoteData);
router.get('/getJSCategory', getCategoryData);

router.post('/addNote', postNoteData);
router.use('/deleteData/:id', deleteNote);
router.use(pageNotFound);
router.use(serverError);

module.exports = router;
