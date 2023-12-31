import { projectList, projectBtn, context } from './dom';
import { getData, displayAllData, storage } from '.';

let projects = [];

projectBtn.addEventListener('click', () => {
  projectBtn.style.display = 'none';

  const div = document.createElement('div');
  const inpt = document.createElement('input');
  const createBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  inpt.placeholder = 'Project Name: ';
  inpt.setAttribute('required', '');

  div.style.display = 'flex';
  div.style.backgroundColor = 'brown';

  createBtn.textContent = 'Create';
  cancelBtn.textContent = 'Cancel';

  div.append(inpt, createBtn, cancelBtn);
  projectBtn.after(div);

  createBtn.addEventListener('click', () => {
    inpt.setCustomValidity('');
    const isValid = inpt.reportValidity();

    if (isValid) {
      projects.push(inpt.value);
      storage.setItem('projects', projects);
      div.remove();
      projectBtn.style.display = 'inline-block';
      displayProject();
    } else {
      inpt.setCustomValidity("Shouldn't be empty!");
    }
  });

  cancelBtn.addEventListener('click', () => {
    div.remove();
    projectBtn.style.display = 'inline-block';
  });
});

export function displayProject () {
  const data = getData('projects');
  projects = data.split(',');

  const project = projects[projects.length - 1];

  createProjectListItem(project);
}

export function displayProjects () {
  if (getData('projects') === null) {
    storage.setItem('projects', 'main');
  }

  const data = getData('projects');
  projects = data.split(',');

  for (const project of projects) {
    createProjectListItem(project);
  }
}

export function createProjectListItem (project) {
  const li = document.createElement('li');

  li.classList.add('project');
  li.textContent = project;

  if (project === 'main') li.classList.add('selected');

  li.addEventListener('mouseover', (e) => {
    e.target.classList.add('special');
  });

  li.addEventListener('mouseout', (e) => {
    e.target.classList.remove('special');
  });

  li.addEventListener('click', (e) => {
    context.setAttribute('id', e.target.textContent);

    updateAllTodoItems();
    displayAllData();

    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });

  projectList.append(li);
}

function updateAllTodoItems () {
  const listItems = document.querySelectorAll('.todo-item');

  listItems.forEach((item) => {
    item.remove();
  });
}
