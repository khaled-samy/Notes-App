/* eslint-disable no-undef */
const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const { getData } = require('../database/queries/getData');
const postData = require('../database/queries/postData');
const deleteData = require('../database/queries/deleteData');

beforeEach(() => dbBuild());

describe('Test database functions', () => {
  test('Get notes, categorys from database', () => {
    const expected = {
      category: 'javascript',
      title: 'first js note',
      note: 'note1 note1 note1 note1 note1',
    };
    return getData()
      .then((data) => {
        expect(data.rows[0]).toEqual(expected);
      });
  });

  test('Insert note', () => {
    const expected = {
      title: 'test title note',
      note: 'test text note',
      category_id: 1,
    };
    return postData(expected.title, expected.note, expected.category_id)
      .then((data) => {
        expect(data.rows[0]).toEqual(expected);
      });
  });

  test('deleteData note', () => deleteData()
    .then((data) => {
      expect(data.rows[0]).toEqual(undefined);
    }));
});

afterAll(() => connection.end());
