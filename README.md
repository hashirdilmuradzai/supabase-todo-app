# Supabase Todo App

A Todo List application built with HTML, CSS, JavaScript, and Supabase. This project allows users to create, view, edit, delete, and manage tasks, with data stored in a Supabase database.

## 🚀 Features

- **Add Tasks:** Create new todo items and save them to Supabase.
- **View Tasks:** Fetch and display saved tasks from the database.
- **Edit Tasks:** Update existing todo items.
- **Delete Tasks:** Remove tasks from the database.
- **Mark as Completed:** Click a task to mark it as completed.
- **Toggle Task Status:** Mark completed tasks as incomplete again.
- **Persistent Completion Status:** Save task completion status in Supabase so it remains after refreshing the page.
- **Dynamic UI:** Update the task list after adding, editing, or deleting tasks.
- **Latest Tasks First:** Display newer tasks before older ones.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Supabase
- Supabase JavaScript Client
- Font Awesome

## 📚 Concepts Practiced

- DOM Manipulation
- Event Handling
- Asynchronous JavaScript
- `async/await`
- Promises
- Arrow Functions
- Template Literals
- `querySelector()`
- `addEventListener()`
- `classList.toggle()`
- `insert()`
- `select()`
- `update()`
- `delete()`
- Database Queries
- CRUD Operations

## 🗄️ Supabase Database

The application uses a `todos` table to store task information.

| Column         | Purpose                             |
| -------------- | ----------------------------------- |
| `id`           | Unique identifier for each task     |
| `todo`         | Stores the task text                |
| `is_completed` | Stores the task's completion status |

The `is_completed` column stores a Boolean value (`true` or `false`) to track whether a task is completed.

## ⚙️ How It Works

1. Enter a task and submit the form.
2. The task is inserted into the Supabase database.
3. Saved tasks are fetched and displayed on the page.
4. Click a task to toggle its completion status.
5. Edit a task to update its text.
6. Delete a task to remove it from the database.
7. Refresh the page to see the saved tasks and their completion statuses.

## 🎯 Project Purpose

The purpose of this project is to practice JavaScript DOM manipulation, asynchronous programming, CRUD operations, and database integration using Supabase.

It also demonstrates how to synchronize user interactions with a backend database so task changes persist across page reloads.

## 👨‍💻 Author

**Hashir Dilmurad Zai**
