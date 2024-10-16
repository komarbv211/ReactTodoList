import React from 'react';
import './App.css';
import { TODOS } from './todo'; 
import TodoList from './components/todoList/todo-list-component'; 

function App() {


  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul className="todo_list">
        {TODOS.map((i) => (
          <TodoList key={i.id} {...i} />
        ))}
      </ul>
    </div>
  );
}

export default App;
