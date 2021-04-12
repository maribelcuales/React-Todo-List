import React from "react";

function Todo({ todo }) {
  return (
    // Styled <li> with the textDecoration of line-through if it's due is completed by using a ternary expression   
    <div style={{ display: "flex" }}>
      <input type="checkbox"/>
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