import React from "react";
import "../styles/NewTodo.css";
import addIcon from "../images/add.svg";

interface Props {
  addTodo: Function;
}

interface State {
  todoText: string;
}

class NewTodo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoText: "",
    };
  }

  handleChange = (e: any) => {
    this.setState({ todoText: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    if (this.state.todoText === "") return;
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <div>
        <form className='new-todo' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='todo'
            onChange={this.handleChange}
            placeholder='Add a todo'
            autoComplete='off'
            value={this.state.todoText}
          />
          <img
            onClick={this.handleSubmit}
            className='addIcon'
            src={addIcon}
            alt='add todo button'
          />
        </form>
      </div>
    );
  }
}

export default NewTodo;
