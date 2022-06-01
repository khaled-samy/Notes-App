/* eslint-disable no-undef */
const dataCreation = document.querySelector('.data-creation');
const getAllData = document.querySelector('.getAllData');
const getJavaScriptData = document.querySelector('.getJavaScriptData');
const getPythonData = document.querySelector('.getPythonData');
const getPhpData = document.querySelector('.getPhpData');
const getOthersData = document.querySelector('.getOthersData');

fetchToGetAllData();
getAllData.addEventListener('click', () => {
  dataCreation.textContent = '';
  fetchToGetAllData();
});

getJavaScriptData.addEventListener('click', () => {
  dataCreation.textContent = '';
  grtDataForSpecificCategory(1);
});
getPythonData.addEventListener('click', () => {
  dataCreation.textContent = '';
  grtDataForSpecificCategory(2);
});
getPhpData.addEventListener('click', () => {
  dataCreation.textContent = '';
  grtDataForSpecificCategory(3);
});
getOthersData.addEventListener('click', () => {
  dataCreation.textContent = '';
  grtDataForSpecificCategory(4);
});
