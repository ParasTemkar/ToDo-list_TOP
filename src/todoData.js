import { storeTodos } from "./todoStorage";
import { renderTodos } from "./todoView";

let myLibrary = [];

export function getTodos() { return myLibrary; }

export function addTodo(todo) { myLibrary.push(todo); }

export function deleteTodo(todoId) {
  // todoId from dataset is a string, 
  // so we compare it loosely (==) or convert it to a number.
  const idAsNumber = parseInt(todoId, 10);

    const index = myLibrary.findIndex(todo => todo.id === idAsNumber);
  if (index !== -1) {
    myLibrary.splice(index, 1); // mutate the original array not redeclare (do not work)
  }

  storeTodos();
  renderTodos();
}