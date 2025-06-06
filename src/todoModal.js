import { ToDo } from "./todoCreate"; 

const modalWindow = document.querySelector('#modalWindow');
const myLibrary = [];

document.querySelector('#modalOpen').addEventListener('click', () => modalWindow.style.display = "block");
document.querySelector('#modalClose').addEventListener('click', () => modalWindow.style.display = "none");

document.getElementById("todo-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("input[name='title']").value;
  const note = document.querySelector("textarea[name='note']").value;
  const duedate = document.querySelector("input[name='date']").value;
  const priority = document.querySelector("select[name='priority']").value;

  const todo = new ToDo(title, note, duedate, priority);
  myLibrary.push(todo);

  console.log(todo);

  modalWindow.style.display = "none";
});
