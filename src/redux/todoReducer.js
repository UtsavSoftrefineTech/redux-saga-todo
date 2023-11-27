// src/redux/todoReducer.js
const loadTodosFromLocalStorage = () => {
  try {
    const serializedTodos = localStorage.getItem("todos");
    if (serializedTodos === null) {
      return [];
    }
    return JSON.parse(serializedTodos);
  } catch (error) {
    console.error("Error loading todos from local storage:", error);
    return [];
  }
};

const saveTodosToLocalStorage = (todos) => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", serializedTodos);
  } catch (error) {
    console.error("Error saving todos to local storage:", error);
  }
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodos = [...state.todos, action.payload];
      saveTodosToLocalStorage(newTodos);
      return {
        ...state,
        todos: newTodos,
      };
    case "REMOVE_TODO":
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      saveTodosToLocalStorage(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
