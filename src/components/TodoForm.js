import React, { useState } from "react";  

function TodoForm() {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  return (
    <form>
      <input />
      <button /> 
    </form>
  );
}

export default TodoForm; 