
import { addTodo } from './todoData';
import { renderTodos } from './todoView';
import { storeTodos } from './todoStorage';

function handleNewTodo(todo) {
  addTodo(todo);
  storeTodos();
  renderTodos();
}

export { handleNewTodo };
