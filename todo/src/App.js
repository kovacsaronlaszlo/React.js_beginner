import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      }
    })
  }

  render () {
    const todosComponent = this.state.todos.map(todo => 
      <TodoItem
        key={todo.id}
        id={todo.id}
        complete={todo.completed}
        text={todo.text}
        handleChange={this.handleChange} />
    );

    return (
      <div className="todo-list">
        {todosComponent}
      </div>
    );
  }
}

export default App;
