import { useState } from "react";

function Form({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué necesitas hacer hoy?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default Form;