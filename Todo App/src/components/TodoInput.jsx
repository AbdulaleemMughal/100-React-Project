import { useEffect, useState } from "react";
import { TodoItems } from "./TodoItems";

export const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("my-todos")
      ? JSON.parse(localStorage.getItem("my-todos"))
      : []
  ); // Get all the stored todos on reload

  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]); // wheneverr the todos state changes it store the todos into the local storage

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoInput) {
      alert("Plaese enter the todo...");
      return;
    }

    const newTodo = {
      id: Date.now(), // For random Id,
      todo: todoInput.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodoInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditTodo = (id, prevTodo) => {
    const newTodo = prompt("Enter the new todo here.", prevTodo);
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo: newTodo } : item))
    );
  };

  const handleToggleItem = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div className="todo-container">
          <form onSubmit={(e) => handleAddTodo(e)} className="todo-input">
            <input
              type="text"
              placeholder="Enter Todo..."
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          {todos.map((todo) => {
            return (
              <TodoItems
                key={todo.id}
                data={todo}
                onDelete={handleDeleteTodo}
                onEdit={handleEditTodo}
                onToggle={handleToggleItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
