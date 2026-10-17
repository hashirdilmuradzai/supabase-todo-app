const todoInput = document.querySelector("#todo-input");
const todoOutput = document.querySelector("#todo-output");

const todo = (event) => {
  event.preventDefault();

  showTodo();
};

const showTodo = () => {
  todoOutput.innerHTML = "";
  const todos = todoInput.value;
  todoInput.value = "";

  //   for (let i = 0; i < todos.length; i++) {
  todoOutput.innerHTML += `<li>${todos} <button><i class="fa-solid fa-x"></i></button></li>`;
  //   }
};
