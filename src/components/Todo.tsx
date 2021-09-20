import React from "react";
import "../styles/Todo.css";

interface Props {
  todo: string;
  deleteTodo: Function;
}

const Todo = ({ todo, deleteTodo }: Props) => {
  const handleBtnClick = () => {
    deleteTodo(todo);
  };

  return (
    <div>
      <div className='todo'>{todo}</div>
      <button onClick={handleBtnClick}>Remove</button>
    </div>
  );
};

export default Todo;
