import React from "react";
import "./App.css";

import Logo from "./components/Logo/Logo";
import AddTodoBox from "./components/AddTodoBox/AddTodoBox";
import TodoList from "./components/TodoList/TodoList";

const db = {
  todoList: [
    {
      name: "todo1",
      done: false,
      tags: ["january", "february"],
      date: new Date()
    },
    {
      name: "todo2",
      done: false,
      tags: ["january", "february"],
      date: new Date()
    },
    {
      name: "todo3",
      done: false,
      tags: ["january", "february"],
      date: new Date()
    },
    {
      name: "todo4",
      done: false,
      tags: ["january", "february"],
      date: new Date()
    }
  ],

  doneList: [],
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: db.todoList,
      doneList: db.doneList
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleDoneDB = this.toggleDoneDB.bind(this);
  }

  addTodo(todoName) {
    db.todoList.push({
      name: todoName,
      done: false,
      tags: [],
      date: new Date()
    });
    this.setState({ todoList: db.todoList });
  }

  toggleDoneDB(pos, done) {
    console.log("todos: ", db.todoList, "done: ", db.doneList);
    if (done) {
      db.doneList[pos].done = !db.doneList[pos].done; // toggle not done
      db.todoList.push(db.doneList[pos]); // add in not done list
      db.doneList[pos] = null; // remove from done list
    } else {
      db.todoList[pos].done = !db.todoList[pos].done; // toggle done
      db.doneList.push(db.todoList[pos]); // add in done list
      db.todoList[pos] = null; // remove from not done list
    }
    this.setState({ // change the state to render the change
      todoList: db.todoList,
      doneList: db.doneList
    }); 
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <AddTodoBox addTodo={this.addTodo}/>
        <TodoList title={"Todos"} todoList={this.state.todoList} toggleDoneDB={this.toggleDoneDB}/>
        <TodoList title={"Finished"} todoList={this.state.doneList} toggleDoneDB={this.toggleDoneDB}/>
      </div>
    );
  }
};

export default App;