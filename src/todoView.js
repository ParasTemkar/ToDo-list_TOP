const myLibrary = [];

function renderTodos() {
  const container = document.getElementById("container");
  container.innerHTML = ""; 

  myLibrary.forEach((todo, index) => {
    const card = document.createElement("div");
    card.classList.add("todo-card");
    
    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p><strong>Note:</strong> ${todo.note}</p>
      <p><strong>Due Date:</strong> ${todo.duedate.toDateString()}</p>
      <p><strong>Priority:</strong> ${todo.priority}</p>
    `;

    container.appendChild(card);
  });
}

export {myLibrary, renderTodos};