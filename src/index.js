import './style.css';
// import { compareAsc, format } from 'date-fns'
import {
  dialog, addBtn, titleInpt,
  descriptionInpt, dueDateInpt, priorityInpt,
  createTodoItem, editKey, updateTodoItem
} from './dom';
import { displayProjects } from './project';

// DOM Manipulation
export const storage = window.localStorage;

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const isValid = checkValidation();

  if (isValid) {
    if (e.target.textContent === 'Add') {
      const todo = setTodo(titleInpt.value, descriptionInpt.value,
        dueDateInpt.value, priorityInpt.value);

      storeData(todo);
      displayData(todo.id);
    } else if (e.target.textContent === 'Edit') {
      const jsonData = getData(editKey);
      const data = JSON.parse(jsonData);

      data.title = titleInpt.value;
      data.description = descriptionInpt.value;
      data.dueDate = dueDateInpt.value;
      data.priority = priorityInpt.value;

      updateTodoItem(editKey);
      storeData(data);
      displayData(data.id);
    }
  }
});

function checkValidation () {
  titleInpt.setCustomValidity('');
  const isValid = titleInpt.reportValidity();

  if (isValid) {
    dialog.close();
  } else {
    titleInpt.setCustomValidity("Shouldn't be empty!");
  }

  return isValid;
}

// TODO OBJECT
function setTodo (title, description, dueDate, priority) {
  const todo = {};
  const project = document.querySelector('.project').id;

  todo.id = Date.now().toString();
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  todo.project = project;

  return todo;
}

// CREATE TODO LIST
displayAllData();
displayData();
displayProjects();
function displayData (key) {
  if (hasNumber(key)) {
    createTodoItem(key);
  }
}
export function displayAllData () {
  for (const key in storage) {
    if (hasNumber(key)) {
      createTodoItem(key);
    }
  }
}

function hasNumber (myString) {
  return /\d/.test(myString);
}

// USE OF FORMAT AND COMPARE

// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// dates.sort(compareAsc)
// dates.forEach((e) => {
//
//     p(e);
// });

// WINDOW FUNCTIONS

function storeData (item) {
  return storage.setItem(item.id, JSON.stringify(item));
}

export function getData (key) {
  return storage.getItem(key);
}

export function removeData (key) {
  return storage.removeItem(key);
}

// if (!Window.storeData) {
//   Window.storeData = storeData
// } else {
//   console.warn('storeData is already assigned!')
// }

// if (!Window.getData) {
//   Window.getData = getData
// } else {
//   console.warn('getStorageData is already assigned!')
// }
