import React from 'react';

const onAddTodoChange = (e) => {
  console.log(e.target.value);
}

const AddTodoBox = (props) => {
  const inputRef = React.createRef();

  return (
    <div>
      <input type="text" name="todoName" onChange={onAddTodoChange} ref={inputRef}/>
      <button type="button" onClick={() => {props.addTodo(inputRef.current.value)}}>Add</button>
    </div>
  );
};

export default AddTodoBox;