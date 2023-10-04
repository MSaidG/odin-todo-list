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

  if (hasNumber(key)) {
    let jsonData = getData(key);
    let data = JSON.parse(jsonData);

    p(data);

    let listItemContext = document.createElement("div");
    let titleH = document.createElement("h3");
    let descriptionP = document.createElement("p");
    let dueDateP = document.createElement("p");
    let priorityP = document.createElement("p");
    let listItem = document.createElement("li");

    listItemContext.style.backgroundColor = "brown";

    if (data.title)titleH.textContent = data.title;
    if (data.description) descriptionP.textContent = data.description;
    if (data.dueDate) dueDateP.textContent = data.dueDate;
    if (data.priority) priorityP.textContent = data.priority;

    listItemContext.append(titleH, descriptionP, dueDateP, priorityP);
    listItem.append(listItemContext);
    list.append(listItem)
  }
  //if (!hasNumber(key)) {
  //  storage.removeItem(key);
  //}
  p(getData(key));
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