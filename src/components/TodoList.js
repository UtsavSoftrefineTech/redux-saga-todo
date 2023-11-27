import React from "react";

const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="w-full flex flex-col items-center justify-center">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-11/12 flex items-center justify-between border-2 border-white rounded p-2 font-medium mb-2"
        >
          {todo.text}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => onRemoveTodo(todo.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
