
const todosString = localStorage.getItem('todos');  
let myLibrary = JSON.parse(todosString) || [];

function renderTodos() {
  const container = document.getElementById("container");
  container.innerHTML = ""; 

  myLibrary.forEach((todo) => {                                                                                                                                                                                                                                                                                                                          
    const card = document.createElement("div");
    card.classList.add("todoCard");
    
    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p><strong>Note:</strong> ${todo.note}</p>
      <p><strong>Priority:</strong> ${todo.priority}</p>
    `;

    const dueDate = new Date(todo.duedate);
    if (!isNaN(dueDate.getTime())) {
      card.innerHTML += `<p><strong>Due Date:</strong> ${dueDate.toDateString()}</p>`;
    }

    card.innerHTML += `<button class="deleteButton" id="${todo.title}" data-todo-id="${todo.id}">Delete</button>`;

    container.appendChild(card);
  });
}

export { myLibrary, renderTodos };

