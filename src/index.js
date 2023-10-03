import './style.css';
import { compareAsc, format } from 'date-fns';
import p from './logger';

const storage = window["localStorage"];



// todo object
let test = {}
test.title = "Odin";
test.description = "Finish at least one level";
test.dueDate = format(new Date(2023, 9, 5), 'yyyy-MM-dd');
test.priority = "High"

p(test);

function setTodo() {

  const todo = {}
  todo.id = Date.now().toString();
  todo.title = prompt("title: ");
  todo.description = prompt("description: ");
  todo.dueDate = prompt("dueDate: ");
  todo.priority = prompt("priority: ");

  return todo;
}

const test1 = setTodo();
(test1);


storeData(test);
storeData(test1.id, JSON.stringify(test1));

p(`Data: ${getData(test.title)}`);
p(getData(test1.id));

for (let key in storage) {

  p(key);
}

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
dates.forEach((e) => {

    p(e);
});





p(getData("holiday"));

storeData ("food", "good");

function storeData (item) {

  return storage.setItem(item.title, JSON.stringify(item));
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