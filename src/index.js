import './style.css';
import { compareAsc, format } from 'date-fns';
import p from './logger';
import { body, dialog, context, showBtn,
  form, closeBtn, addBtn, dialogText, titleInpt,
  titleLbl, descriptionInpt, descriptionLbl, 
  dueDateInpt, dueDateLbl, priorityInpt, 
  priorityLbl, listContext, list, 
  createTodoItem, editKey, updateTodoItem} from './dom';

// DOM Manipulation

const storage = window["localStorage"];


addBtn.addEventListener("click", (e) => {

  p(e.target.textContent);
  e.preventDefault();
  
  if (e.target.textContent === "Add")
  {
    let isValid = checkValidation();
    if (isValid) {
      let todo = setTodo(titleInpt.value, descriptionInpt.value, 
        dueDateInpt.value, priorityInpt.value);
  
      storeData(todo);
      displayData(todo.id);
    }
  }
  else if (e.target.textContent === "Edit") {


    let jsonData = getData(editKey);
    let data = JSON.parse(jsonData);
    let isValid = checkValidation();
    if (isValid) {

      data.title = titleInpt.value;
      data.description = descriptionInpt.value;
      data.dueDate = dueDateInpt.value;
      data.priority = priorityInpt.value;


      storeData(data);
      updateTodoItem(editKey);
      displayData(data.id);
    }
  }

});


function checkValidation() {

  titleInpt.setCustomValidity(""); 
  let isValid = titleInpt.reportValidity();
  
  if (isValid){
    dialog.close();
  } 
  else 
  {
    titleInpt.setCustomValidity("Title name is required!");
  }
  
  return isValid;
}

// TODO OBJECT
function setTodo(title, description, dueDate, priority) {
  const todo = {}
  let project = document.querySelector(".project").id;

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
function displayData (key) {

  if (hasNumber(key)) {

    createTodoItem(key);
  }

}
function displayAllData() {

  for (let key in storage) {

    if (hasNumber(key)) {

      createTodoItem(key);
    }
  
  }
}
updateTodoItem("1696588272237");


function hasNumber(myString) {
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


if (!Window.storeData) {
  Window.storeData = storeData;
} else {
  console.warn('storeData is already assigned!');
}

if (!Window.getData) {
  Window.getData = getData;
} else {
  console.warn('getStorageData is already assigned!');
}