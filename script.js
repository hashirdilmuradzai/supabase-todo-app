const todoInput = document.querySelector("#todo-input");
const todoOutput = document.querySelector("#todo-output");
const supabaseURL = "https://baiatiwucgslosyrtfuv.supabase.co";
const supabaseKey = "sb_publishable_4RKSX2Eq2zYTjWiEPEu6vg_b1pRjN37";

const supabaseClient = supabase.createClient(supabaseURL, supabaseKey);

const todo = async (event) => {
  event.preventDefault();

  const todo = todoInput.value.trim();
  todoInput.value = "";

  await supabaseClient.from("todos").insert({ todo: todo });

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
    todoOutput.innerHTML += `<li data-id="${todos[i].id}" class="${todos[i].is_completed ? "checked" : ""}">${todos[i].todo} <div class="btn-group"><button onclick="editTodo(${todos[i].id},"${todos[i].todo}")"><i class="fa-regular fa-pen-to-square"></i></button><button onclick="deleteTodo(${todos[i].id})"><i class="fa-solid fa-x"></i></button></div></li>`;
  }
};

todoOutput.addEventListener("click", async (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  const response = await supabaseClient
    .from("todos")
    .update({ is_completed: e.target.classList.contains("checked") })
    .eq("id", e.target.dataset.id);

  if (!response.error) {
    alert("Completed");
  }

  console.log(response);
});

showTodo();

const deleteTodo = async (id) => {
  const response = await supabaseClient.from("todos").delete().eq("id", id);

  console.log(response);

  if (!response.error) {
    alert("Successfully Deleted");
    showTodo();
  } else {
    ("Please try again");
  }
};

const editTodo = async (id, oldValue) => {
  const newValue = prompt("Enter new value", oldValue);

  if (newValue === null || newValue === "") return;

  const response = await supabaseClient
    .from("todos")
    .update({ todo: newValue })
    .eq("id", id);

  showTodo();
};
