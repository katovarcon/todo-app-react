function Todo({ todo, toggleTodo }) {
    return (
      <p
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </p>
    );
  }
  
  export default Todo;