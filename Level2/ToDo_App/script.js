// script.js

document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    addTodoItem(title, description);
    todoForm.reset();
   
  });

  function addTodoItem(title, description) {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td><button class="delete-btn">X</button></td>
        `;

    row.querySelector(".delete-btn").addEventListener("click", function () {
      row.remove();
    });

    todoList.appendChild(row);
  }
});
