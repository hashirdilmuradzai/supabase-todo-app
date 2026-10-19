const todoInput = document.querySelector("#todo-input");
const todoOutput = document.querySelector("#todo-output");
const supabaseURL = "https://baiatiwucgslosyrtfuv.supabase.co";
const supabaseKey = "sb_publishable_4RKSX2Eq2zYTjWiEPEu6vg_b1pRjN37";

const supabaseClient = supabase.createClient(supabaseURL, supabaseKey);

const todo = async (event) => {
  event.preventDefault();

  const todo = todoInput.value;
  todoInput.value = "";

  await supabaseClient.from("todos").insert({ todo: todo });

  showTodo();
};

const showTodo = async () => {
  todoOutput.innerHTML = "";

  const response = await supabaseClient.from("todos").select("*");
  const todos = response.data;

  for (let i = 0; i < todos.length; i++) {
    todoOutput.innerHTML += `<li>${todos[i].todo} <button onclick="deleteTodo(${todos[i].id})"><i class="fa-solid fa-x"></i></button></li>`;
  }
};
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
