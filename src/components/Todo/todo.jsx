function Todo({ todo, toggleTodo, deleteTodo }) {
    return (
      <div className="todo fade-in">
        <p
          onClick={() => toggleTodo(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          {todo.text}
        </p>
  
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          ✖
        </button>
      </div>
    );
  }
  
  export default Todo;