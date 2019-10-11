import React from 'react';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  }
  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={props.complete}
        onChange={() => props.handleChange(props.id)} />
      <p style={props.complete ? completedStyle : null}>{props.text}</p>
    </div>
  );
}

export default TodoItem;