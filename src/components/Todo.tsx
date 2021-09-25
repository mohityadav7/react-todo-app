import React from "react";
import "../styles/Todo.css";
import deleteIcon from "../images/delete.svg";

interface Props {
  todo: string;
  deleteTodo: Function;
}

interface State {}

class Todo extends React.Component<Props, State> {
  handleBtnClick = () => {
    this.props.deleteTodo(this.props.todo);
  };

  render() {
    return (
      <div>
        <div className='todo'>
          {this.props.todo}
          <img
            className='deleteTodoBtn'
            onClick={this.handleBtnClick}
            src={deleteIcon}
            alt='delete todo button'
          />
        </div>
      </div>
    );
  }
}

export default Todo;
