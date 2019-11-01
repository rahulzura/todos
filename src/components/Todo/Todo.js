import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done
    };

    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    const pos = this.props.id;
    const done = this.state.done;
    this.setState(state => ({done: !state.done}));
    this.props.toggleDoneDB(pos, done);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className="bg-red p10 rc5">
        <input type="checkbox" name="toggleDone" onChange={this.toggleDone}/>
        <p className="inln">{todo.name}</p>
      </div>
      );
    };
  }
export default Todo;