import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(text) {
    setTodos([...todos, text]);
  }

  function removeTodos(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function editTodo(index, text) {
    const newTodos = [...todos];
    newTodos[index] = text;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        addTodos(event.target.elements.todo.value);
        event.target.elements.todo.value = "";
      }}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="text" value={todo} onChange={(event) => editTodo(index, event.target.value)} />
            <button onClick={() => {removeTodos(index)}}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
