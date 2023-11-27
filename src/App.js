// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch({ type: "ADD_TODO_REQUEST", payload: todo });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO_REQUEST", payload: id });
  };

  return (
    <div className="h-screen w-screen bg-slate-400 text-center py-8">
      <h1 className="text-3xl font-semiblod">Redux Saga Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default App;
