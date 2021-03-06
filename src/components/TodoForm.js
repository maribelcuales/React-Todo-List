import React, { useState } from "react";  
// id package to generate the todo id 
import {v4 as uuid}  from "uuid"; 

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input details 
    setTodo({ ...todo, task: e.target.value });
  };

  function handleSubmit(e) {
    // prevents browser refresh; 
    e.preventDefault();
    // if statement only gets called if the todo.task is not empty  
    if (todo.task.trim()) {
      // update todo with an id property from uuid package
      addTodo({ ...todo, id: uuid() });
      // reset task input 
      setTodo({ ...todo, task:"" }); 
    }
  }

  return (
    // Define the form's onSubmit property to the new handleSubmit function  
    <form onSubmit={handleSubmit}>
      <input 
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Submit</button> 
    </form>
  );
}

export default TodoForm; 