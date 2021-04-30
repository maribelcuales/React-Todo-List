import React from "react";

function Todo({ todo, toggleComplete }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  return (
    // Styled <li> with the textDecoration of line-through if it's due is completed by using a ternary expression   
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null
        }}      
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
}

export default Todo; 