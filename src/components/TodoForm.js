import React, { useState } from "react";  
import uuid from "uuid"; 

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    // if statement only gets called if the todo.task is not empty  
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
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
      <button type="submit" /> 
    </form>
  );
}

export default TodoForm; 