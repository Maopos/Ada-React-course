import useTodo from "../hooks/useTodo";

const initialTodos = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn Node.js",
  },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodo(initialTodos);

  return (
    <div>
      <center>
        <h1>Todoapp</h1>
        <button onClick={() => addTodo({ title: "New Todo" })}>Add</button>

        {todos.map((i, j) => (
          <div key={i.id}>
            <label>{i.title + j}</label>
            <button style={{ margin: "5px" }} onClick={() => deleteTodo(i.id)}>
              Delete
            </button>
          </div>
        ))}
      </center>
    </div>
  );
};

export default TodoApp;
