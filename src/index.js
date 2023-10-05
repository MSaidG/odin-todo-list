import './style.css';
import { compareAsc, format } from 'date-fns';
import p from './logger';
import { body, dialog, context, showBtn,
  form, closeBtn, addBtn, dialogText, titleInpt,
  titleLbl, descriptionInpt, descriptionLbl, 
  dueDateInpt, dueDateLbl, priorityInpt, 
  priorityLbl, listContext, list} from './dom';

// DOM Manipulation

const storage = window["localStorage"];



addBtn.addEventListener("click", (e) => {
  
  let isValid = checkValidation();
  if (isValid) {
    let todo = setTodo(titleInpt.value, descriptionInpt.value, 
      dueDateInpt.value, priorityInpt.value);

    storeData(todo);
    displayData(todo.id);
  }

  e.preventDefault();

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

function createTodoItem (key) {
  let jsonData = getData(key);
  let data = JSON.parse(jsonData);

  p(data);

  let listItemContext = document.createElement("div");
  let titleH = document.createElement("h3");
  let descriptionP = document.createElement("p");
  let dueDateP = document.createElement("p");
  let priorityP = document.createElement("p");
  let listItem = document.createElement("li");
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");

  listItemContext.style.backgroundColor = "brown";
  listItemContext.style.display = "flex";
  listItemContext.style.justifyContent = "space-between";

  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", key);

  editBtn.textContent = "Edit";
  editBtn.setAttribute("id", key);

  deleteBtn.addEventListener("click", (e) => {

    let key = e.target.id;
    removeData(key);
    listItem.remove();
  });


  editBtn.addEventListener("click", (e) => {

    let key = e.target.id;

  });

  if (data.title)titleH.textContent = data.title;
  if (data.description) descriptionP.textContent = data.description;
  if (data.dueDate) dueDateP.textContent = data.dueDate;
  if (data.priority) priorityP.textContent = data.priority;

  listItemContext.append(titleH, descriptionP, dueDateP, priorityP, deleteBtn);
  listItem.append(listItemContext);
  list.append(listItem)
}

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

function getData (key) {

  return storage.getItem(key);
}

function removeData (key) {

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