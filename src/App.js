import React, {useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm"

function App() {
  const [todos, setTodos] = useState([]);  

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}
  
export default App;
