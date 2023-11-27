import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      onAddTodo({ id: Date.now(), text });
      setText("");
    }
  };

  return (
    <div className="my-4">
      <input
        type="text"
        value={text}
        placeholder="Enter todo text"
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded border-gray-400 w-1/3"
      />
      <button
        onClick={handleAddTodo}
        className="ml-2 px-3 py-1 bg-green-500 text-white rounded"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
