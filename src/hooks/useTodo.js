import { useState } from "react";

const useTodo = (values) => {
  const [todos, setTodos] = useState(values);

  const addTodo = (newTodo) => {
    newTodo.id = Date.now();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updateTodos = todos.filter((i) => i.id !== id);
    setTodos(updateTodos);
  };

  return [todos, addTodo, deleteTodo];
};
export default useTodo;
