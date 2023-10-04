import './style.css';
import { compareAsc, format } from 'date-fns';
import p from './logger';

// DOM Manipulation

const storage = window["localStorage"];
const body = document.querySelector("body");
const dialog = document.createElement("dialog");
const context = document.createElement("div");
const showBtn = document.createElement("button");

// Form
const form = document.createElement("form");
const closeBtn = document.createElement("button");
const addBtn = document.createElement("button");
const dialogText = document.createElement("p");
const titleLbl = document.createElement("label");
const descriptionLbl = document.createElement("label");
const dueDateLbl = document.createElement("label");
const priorityLbl = document.createElement("label");
const titleInpt = document.createElement("input");
const descriptionInpt = document.createElement("input");
const dueDateInpt = document.createElement("input");
const priorityInpt = document.createElement("input");

showBtn.textContent = "ADD TODO";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "10px";

dialogText.textContent = "Add Your Todo";
titleLbl.textContent = "Title: ";
titleInpt.setAttribute("required", "");
descriptionLbl.textContent = "Description: ";
dueDateLbl.textContent = "Due Date: ";
priorityLbl.textContent = "Priority: ";
addBtn.textContent = "Add";
addBtn.setAttribute("onsubmit", "return");
closeBtn.textContent = "Close";

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
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
  
  p(`title input: ${titleInpt.value}`);
  p(`priority: ${titleInpt.priority}`);
  return isValid;
}

addBtn.addEventListener("click", (e) => {
  
  let isValid = checkValidation();
  if (isValid) {
    let todo = setTodo(titleInpt.value, titleInpt.description, 
      titleInpt.dueDate, titleInpt.priority);

    storeData(todo);
  }

  e.preventDefault();

});

body.append(context);
context.append(showBtn, dialog);
dialog.append(form);
form.append(dialogText, titleLbl, titleInpt, 
  descriptionLbl, descriptionInpt, 
  dueDateLbl, dueDateInpt,
  priorityLbl, priorityInpt,
  addBtn, closeBtn);


// todo object
//  KEY IS ID



function setTodo(title, description, dueDate, priority) {
  const todo = {}

  todo.id = Date.now().toString();
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;

  return todo;
}


for (let key in storage) {

  p(`keys: ${key}`);
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