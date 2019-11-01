import React from 'react';

import Todo from '../Todo/Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(todo, i) {
    const toggleDoneDB = this.props.toggleDoneDB;
    if (!todo) return todo;
    return <Todo key={i} id={i} todo={todo} toggleDoneDB={toggleDoneDB}/>
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.todoList.map(this.createTodo)}
      </div>
    );
  }
};

export default TodoList;