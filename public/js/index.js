/* eslint-disable no-unused-vars */

const deleteNote = (id) => {
  fetch(`/deleteData/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Function To Render All The Data From The DB
const fetchToGetAllData = () => {
  const dataCreation = document.querySelector('.data-creation');
  fetch('/getData')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        const card = document.createElement('div');
        card.className = 'card';
        const title = document.createElement('h3');
        title.textContent = data[i].title;
        card.appendChild(title);
        const category = document.createElement('span');
        category.textContent = data[i].category;
        card.appendChild(category);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Note';
        deleteBtn.className = 'delete';
        card.appendChild(deleteBtn);
        const note = document.createElement('p');
        note.textContent = data[i].note;
        card.appendChild(note);
        dataCreation.appendChild(card);
        // eslint-disable-next-line no-loop-func
        deleteBtn.onclick = () => {
          deleteNote(data[i].id);
          dataCreation.removeChild(card);
        };
      }
    });
};

// Function To Render All Category From The DB
const grtDataForSpecificCategory = (id) => {
  const dataCreation = document.querySelector('.data-creation');
  const value = new Headers();
  value.append('value', id);
  fetch('/getJSCategory', {
    headers: value,
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        const card = document.createElement('div');
        card.className = 'card';
        const title = document.createElement('h3');
        title.textContent = data[i].title;
        card.appendChild(title);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Note';
        deleteBtn.className = 'delete';
        card.appendChild(deleteBtn);
        const note = document.createElement('p');
        note.textContent = data[i].note;
        card.appendChild(note);
        dataCreation.appendChild(card);

        // eslint-disable-next-line no-loop-func
        deleteBtn.onclick = () => {
          deleteNote(data[i].id);
          dataCreation.removeChild(card);
        };
      }
    });
};
