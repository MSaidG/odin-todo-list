export const body = document.querySelector("body");
export const dialog = document.createElement("dialog");
export const context = document.createElement("div");
export const showBtn = document.createElement("button");

// Form
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

context.classList.add("project");
context.setAttribute("id", "main");

showBtn.textContent = "ADD TODO";

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
addBtn.setAttribute("onsubmit", "return");
closeBtn.textContent = "Close";

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

body.append(context);
context.append(showBtn, dialog, listContext);
dialog.append(form);
listContext.append(list);
form.append(dialogText, titleLbl, titleInpt, 
  descriptionLbl, descriptionInpt, 
  dueDateLbl, dueDateInpt,
  priorityLbl, priorityInpt,
  addBtn, closeBtn);