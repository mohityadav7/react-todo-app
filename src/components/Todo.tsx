import React from "react";
import "../styles/Todo.css";
import deleteIcon from "../images/delete.svg";

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
      <div className='todo'>
        {todo}
        <img
          className='deleteTodoBtn'
          onClick={handleBtnClick}
          src={deleteIcon}
          alt='delete todo button'
        />
      </div>
    </div>
  );
};

export default Todo;
