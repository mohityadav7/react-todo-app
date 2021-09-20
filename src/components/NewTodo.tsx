import React, { useState } from "react";
import "../styles/NewTodo.css";

interface Props {
  addTodo: Function;
}

const NewTodo = ({ addTodo }: Props) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e: any) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todoText === "") return;
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <div>
      <form className='new-todo' onSubmit={handleSubmit}>
        <input
          type='text'
          name='todo'
          onChange={handleChange}
          placeholder='Complete todo app...'
          value={todoText}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
