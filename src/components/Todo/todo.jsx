function Todo({ todo, toggleTodo, deleteTodo }) {
    return (
      <div>
        <p
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </p>
  
        <button onClick={() => deleteTodo(todo.id)}>
          🗑️
        </button>
      </div>
    );
  }
  
  export default Todo;