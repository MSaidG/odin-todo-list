import {removeData, getData} from './index';
import p from './logger';

// Navigation
export const body = document.querySelector("body");
export const dialog = document.createElement("dialog");
export const context = document.createElement("div");
export const showBtn = document.createElement("button");
export const projectBtn = document.createElement("button");
export const projectList = document.createElement("ul");
export const header = document.createElement("header");

// Todo Form
export const form = document.createElement("form");
export const closeBtn = document.createElement("button");
export const addBtn = document.createElement("button");
export const dialogText = document.createElement("p");
export const titleLbl = document.createElement("label");
export const descriptionLbl = document.createElement("label");
export const dueDateLbl = document.createElement("label");
export const priorityLbl = document.createElement("label");
export const titleInpt = document.createElement("input");
//export const descriptionInpt = document.createElement("input");
export const descriptionInpt = document.createElement("textarea");
export const dueDateInpt = document.createElement("input");
export const priorityInpt = document.createElement("input");
export const listContext = document.createElement("div");
export const list = document.createElement("ul");

export let editKey = 0;


context.classList.add("project");
context.setAttribute("id", "main");

header.style.display = "flex";
header.style.gap = "1rem";

list.style.display = "flex";
list.style.flexDirection = "column";
list.style.gap = "10px";

projectList.style.display = "flex";
projectList.style.gap = "2rem";

descriptionInpt.classList.add("description-input");

showBtn.textContent = "ADD TODO";
projectBtn.textContent = "NEW PROJECT";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "10px";

// Dialog form
dialogText.textContent = "Add Your Todo";
titleLbl.textContent = "Title: ";
titleInpt.setAttribute("required", "");
descriptionLbl.textContent = "Description: ";
dueDateLbl.textContent = "Due Date: ";
priorityLbl.textContent = "Priority: ";
addBtn.textContent = "Add";
closeBtn.textContent = "Close";

showBtn.addEventListener("click", () => {
  addBtn.textContent = "Add";
  titleInpt.value = "";
  descriptionInpt.value = "";
  dueDateInpt.value = "";
  priorityInpt.value = "";
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});


body.append(context);
header.append(showBtn, projectBtn, projectList);
context.append(header, dialog, listContext);
dialog.append(form);
listContext.append(list);
form.append(dialogText, titleLbl, titleInpt, 
  descriptionLbl, descriptionInpt, 
  dueDateLbl, dueDateInpt,
  priorityLbl, priorityInpt,
  addBtn, closeBtn);

export function createTodoItem (key) {
  let jsonData = getData(key);
  let data = JSON.parse(jsonData);
  let currentProject = context.id;

  if (data.project === currentProject) {
    const listItemContext = document.createElement("div");
    const buttonContext = document.createElement("div");
    const descriptionContext = document.createElement("div");
    const descriptionText = document.createElement("p");
    const titleH = document.createElement("h3");
    const descriptionP = document.createElement("p");
    const dueDateP = document.createElement("p");
    const priorityP = document.createElement("p");
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
  
    listItemContext.classList.add("list-item");

    listItemContext.style.justifyContent = "space-between";

    descriptionContext.style.backgroundColor = "red";
    descriptionContext.style.display = "none";
    descriptionText.textContent = data.description;
    descriptionText.classList.add("description");

    listItemContext.addEventListener("click", () => {
      if (descriptionContext.style.display === "none") {
        descriptionContext.style.display = "block";
      }
      else {
        descriptionContext.style.display = "none";
      }
    });

    listItem.classList.add("todo-item");
  
    buttonContext.style.display = "flex";
    buttonContext.style.gap = "10px";
  
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
  
      editKey = e.target.id;
      addBtn.textContent = "Edit";
  
      let jsonData = getData(editKey);
      let data = JSON.parse(jsonData);
  
      dialog.showModal();
  
      titleInpt.value = data.title;  
      descriptionInpt.value = data.description;  
      dueDateInpt.value = data.dueDate;  
      priorityInpt.value = data.priority;  
  
    });
  
    if (data.title)titleH.textContent = data.title;
    if (data.description) descriptionP.textContent = data.description;
    if (data.dueDate) dueDateP.textContent = data.dueDate;
    if (data.priority) priorityP.textContent = data.priority;
  
    descriptionContext.append(descriptionText);
    buttonContext.append(editBtn, deleteBtn);
    listItemContext.append(titleH, descriptionP, dueDateP, priorityP, buttonContext);
    listItem.append(listItemContext, descriptionContext);
    list.append(listItem)
  }

}

export function updateTodoItem (key) {
  
  const listItems = document.querySelectorAll(".todo-item");

  listItems.forEach((item) => {

    let button = item.querySelector("button");

    if (key === button.id)
    {
      item.remove();
    }
  });

}

