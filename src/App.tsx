import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const deleteTodo = (todoToDelete: string) => {
    let updatedTodos = todos.filter((todo: string) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    try {
      let localTodos: string[] = JSON.parse(
        localStorage.getItem("todos") || ""
      );
      setTodos(localTodos);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(updateLocalStorage, [todos]);

  return (
    <div className='App'>
      <NewTodo addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo deleteTodo={deleteTodo} todo={todo} key={uuid()} />
      ))}
    </div>
  );
}

export default App;
