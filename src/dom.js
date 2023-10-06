import {removeData, getData, storage, displayAllData} from './index';
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
export const descriptionInpt = document.createElement("input");
export const dueDateInpt = document.createElement("input");
export const priorityInpt = document.createElement("input");
export const listContext = document.createElement("div");
export const list = document.createElement("ul");

export let editKey = 0;


let projects = [];

//projects.push("main");

context.classList.add("project");
context.setAttribute("id", "main");


header.style.display = "flex";
header.style.gap = "1rem";


list.style.display = "flex";
list.style.flexDirection = "column";
list.style.gap = "10px";

projectList.style.display = "flex";
projectList.style.gap = "2rem";

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
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

projectBtn.addEventListener("click", () => {

  projectBtn.style.display = "none";

  const div = document.createElement("div");
  const inpt = document.createElement("input");
  const createBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");


  inpt.placeholder = "Project Name: ";
  inpt.setAttribute("required", "");

  div.style.display = "flex";
  div.style.backgroundColor = "brown";

  createBtn.textContent = "Create";
  cancelBtn.textContent = "Cancel";

  div.append(inpt, createBtn, cancelBtn);
  projectBtn.after(div);

  createBtn.addEventListener("click", () => {

    inpt.setCustomValidity(""); 
    let isValid = inpt.reportValidity();
    
    if (isValid){

      p("what")
      projects.push(inpt.value);
      storage.setItem("projects", projects);
      div.remove();
      projectBtn.style.display = "inline-block";
      displayProject();
    } 
    else 
    {
      inpt.setCustomValidity("Shouldn't be empty!");
    }

  });

  cancelBtn.addEventListener("click", () => {
    div.remove();
    projectBtn.style.display = "inline-block";
  });
  
});

//p(storage.getItem("projects"));

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
  p(currentProject);
  p(data);

  if (data.project === currentProject) {
    const listItemContext = document.createElement("div");
    const buttonContext = document.createElement("div");
    const titleH = document.createElement("h3");
    const descriptionP = document.createElement("p");
    const dueDateP = document.createElement("p");
    const priorityP = document.createElement("p");
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
  
    listItemContext.style.backgroundColor = "brown";
    listItemContext.style.display = "flex";
    listItemContext.style.justifyContent = "space-between";
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
  
    buttonContext.append(editBtn, deleteBtn);
    listItemContext.append(titleH, descriptionP, dueDateP, priorityP, buttonContext);
    listItem.append(listItemContext);
    list.append(listItem)
  }

}
  
export function updateAllTodoItems () {

  const listItems = document.querySelectorAll(".todo-item");

  listItems.forEach((item) => {

      item.remove();
    
  });

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

export function displayProject () {

  let data = getData("projects");
  projects = data.split(",");

  let project = projects[projects.length - 1];

  createProjectListItem(project);

}


export function displayProjects () {

  let data = getData("projects");
  projects = data.split(",");

  for (let project of projects) {
    createProjectListItem(project);
  }

}

export function createProjectListItem(project) {
  let li = document.createElement("li");

  li.classList.add("project");
  li.textContent = project;

  if (project === "main") li.classList.add("selected");

  li.addEventListener("mouseover", (e) => {
    e.target.classList.add("special");
  });

  li.addEventListener("mouseout", (e) => {
    e.target.classList.remove("special");

  });

  li.addEventListener("click", (e) => {
    context.setAttribute("id", e.target.textContent);

    updateAllTodoItems();
    displayAllData();

    document.querySelector(".selected").classList.remove("selected");
    e.target.classList.add("selected");

  });

  projectList.append(li);
}