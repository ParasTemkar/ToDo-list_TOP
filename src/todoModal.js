import { ToDo } from "./todoCreate"; 
import { myLibrary, renderTodos } from "./todoView";
import {storeTodos} from "./todoStorage";

const modalWindow = document.querySelector('#modalWindow');
const todoForm = document.getElementById("todo-form"); 

document.querySelector('#modalOpen').addEventListener('click', () => modalWindow.style.display = "block");
document.querySelector('#modalClose').addEventListener('click', () => {
  modalWindow.style.display = "none";
  todoForm.reset(); 
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("input[name='title']").value;
  const note = document.querySelector("textarea[name='note']").value;
  let duedate = document.querySelector("input[name='date']").value;
  const priority = document.querySelector("select[name='priority']").value;

  const todo = new ToDo(title, note, duedate, priority);
  myLibrary.push(todo);

  renderTodos();
  storeTodos();

  modalWindow.style.display = "none";
  todoForm.reset();
});
