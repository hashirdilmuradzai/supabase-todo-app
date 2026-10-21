const todoInput = document.querySelector("#todo-input");
const todoOutput = document.querySelector("#todo-output");
const supabaseURL = "https://baiatiwucgslosyrtfuv.supabase.co";
const supabaseKey = "sb_publishable_4RKSX2Eq2zYTjWiEPEu6vg_b1pRjN37";

const supabaseClient = supabase.createClient(supabaseURL, supabaseKey);

const todo = async (event) => {
  event.preventDefault();

  const todo = todoInput.value.trim();
  todoInput.value = "";

  const response = await supabaseClient.from("todos").insert({ todo: todo });

  if (!response.error) {
    alert("Task added successfully!");
  } else {
    alert("Oops! Couldn't add your task. Please try again.");
  }

  showTodo();
};

const showTodo = async () => {
  todoOutput.innerHTML = "";

  const response = await supabaseClient
    .from("todos")
    .select("*")
    .order("id", { ascending: false });

  const todos = response.data;

  for (let i = 0; i < todos.length; i++) {
    todoOutput.innerHTML += `<li data-id="${todos[i].id}" class="${todos[i].is_completed ? "checked" : ""}">${todos[i].todo} <div class="btn-group"><button onclick="editTodo(${todos[i].id})" class="edit-btn ${todos[i].is_completed ? "hide" : ""}" title="Edit"><i class="fa-regular fa-pen-to-square"></i></button><button onclick="deleteTodo(${todos[i].id})" title="Delete"><i class="fa-solid fa-x"></i></button></div></li>`;
  }
};

todoOutput.addEventListener("click", async (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

    const response = await supabaseClient
      .from("todos")
      .update({ is_completed: e.target.classList.contains("checked") })
      .eq("id", e.target.dataset.id);

    const hideBtn = e.target.querySelector(".edit-btn");

    if (!response.error) {
      if (e.target.classList.contains("checked")) {
        hideBtn.classList.add("hide");
        alert("Task marked as completed!");
      } else {
        hideBtn.classList.remove("hide");
        alert("Task marked as incomplete!");
      }
    }
  }
});

showTodo();

const deleteTodo = async (id) => {
  const response = await supabaseClient.from("todos").delete().eq("id", id);

  if (!response.error) {
    alert("Task deleted successfully!");
    showTodo();
  } else {
    alert("Failed to delete task. Please try again.");
  }
};

const editTodo = async (id) => {
  const oldValue = await supabaseClient
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  const newValue = prompt("Enter your new todo", oldValue.data.todo);

  if (newValue === null || !newValue.trim()) return;

  const response = await supabaseClient
    .from("todos")
    .update({ todo: newValue.trim() })
    .eq("id", id);

  if (!response.error) {
    alert("Task updated successfully!");
  } else {
    alert("Failed to update task. Please try again.");
  }

  showTodo();
};
