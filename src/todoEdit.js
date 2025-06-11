
import { renderTodos, myLibrary } from "./todoView";
import { storeTodos } from './todoStorage';




const container = document.getElementById('container');
container.addEventListener('click', (event) => {

  if (event.target.classList.contains('deleteButton')) {
 
    const todoIdToDelete = event.target.dataset.todoId;
    
    console.log("Delete connected");
    deleteTodo(todoIdToDelete);
  }
});

function deleteTodo(todoId) {
    
  // Find the todo to delete. Note: todoId from dataset is a string, 
  // so we compare it loosely (==) or convert it to a number.
  const idAsNumber = parseInt(todoId, 10);

    const index = myLibrary.findIndex(todo => todo.id === idAsNumber);
  if (index !== -1) {
    myLibrary.splice(index, 1); // mutate the original array not redeclare
  }


  storeTodos();
  renderTodos(); 
}

