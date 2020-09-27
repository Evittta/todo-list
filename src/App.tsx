import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { TodoItem } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text }]);
  };

  const todoDeleteHandler = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
