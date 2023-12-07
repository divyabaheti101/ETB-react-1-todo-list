import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  // You can call useEffect as many times as you want.
  // Here since params are not passed into [], it will be called only once after render.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log('called');
    console.log('ls2 ', JSON.parse(localStorage.getItem('todos')));
    if(storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // parameter todos passes in [] means every time there is a change to todo useEffect will be called.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('call: ', todos);
    console.log('ls ', JSON.parse(localStorage.getItem('todos')));
  }, [todos]);

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
