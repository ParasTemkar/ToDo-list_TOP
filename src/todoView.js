
const todosString = localStorage.getItem('todos');  
const myLibrary = JSON.parse(todosString);

function renderTodos() {
  const container = document.getElementById("container");
  container.innerHTML = ""; 

  myLibrary.forEach((todo) => {                                                                                                                                                                                                                                                                                                                          
    const card = document.createElement("div");
    card.classList.add("todo-card");
    
    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p><strong>Note:</strong> ${todo.note}</p>
      <p><strong>Priority:</strong> ${todo.priority}</p>
    `;
    if(todo.duedate instanceof Date && !isNaN(todo.duedate.getTime())){
      card.innerHTML += `<p><strong>Due Date:</strong> ${todo.duedate.toDateString()}</p>`;
    }

    card.innerHTML += `<button class="deleteButton" id="${todo.title}" >Delete</button>`

    container.appendChild(card);
  });
}

// function deleteTodos(){
//   document.getElementsByClassName("deleteButton").addEventListener('click', () => );
// }

export {myLibrary, renderTodos};