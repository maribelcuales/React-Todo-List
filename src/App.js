import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // get todos from browser local storage and then parse it
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  };

  // toggle todo items to be completed 
  function toggleComplete(id) {
    // call setTodos to update the todos 
    // pass a new todos array by performing a map on the todos
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo; 
      })
    );
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}
  
export default App;
