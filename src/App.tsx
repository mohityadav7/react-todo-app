import React from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";

interface State {
  todos: string[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  deleteTodo = (todoToDelete: string) => {
    let updatedTodos = this.state.todos.filter(
      (todo: string) => todo !== todoToDelete
    );
    this.setState({ todos: updatedTodos });
  };

  addTodo = (newTodo: string) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  componentDidMount() {
    try {
      let localTodos: string[] = JSON.parse(
        localStorage.getItem("todos") || ""
      );
      this.setState({ todos: localTodos });
    } catch (e) {
      console.log("No saved todos");
    }
  }

  componentDidUpdate() {
    this.updateLocalStorage();
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='App'>
        <NewTodo addTodo={this.addTodo} />
        {todos.length > 0 && (
          <div className='todosContainer'>
            {todos.map((todo, index) => (
              <Todo deleteTodo={this.deleteTodo} todo={todo} key={uuid()} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
