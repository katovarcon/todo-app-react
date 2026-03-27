import Todo from "../Todo/todo";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;