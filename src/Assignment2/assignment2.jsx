import React, { useState } from "react";

export default function Assignment2() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") {
      alert("⚠️ Please enter a task before adding!");
      return;
    }

    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    alert("✅ Task added successfully!");
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📝 Assignment-2: To-Do Application
      </h2>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-64"
        />
        <button
          onClick={handleAdd}
          className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="h-4 w-4 accent-purple-600"
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <button
              onClick={() => handleRemove(todo.id)}
              className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-lg shadow hover:bg-red-600 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
