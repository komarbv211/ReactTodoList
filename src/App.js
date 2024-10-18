import React, { useState } from 'react';

import './App.css';
import { TODOS } from './todo'; 
import TodoList from './components/todoList/todo-list-component'; 

function App() {

  const [todos, setTodos] = useState(TODOS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState(false);
  const [sortByDeadline, setSortByDeadline] = useState(false);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handlePriorityToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterPriorityChange = () => {
    setFilterPriority(!filterPriority);
  };
  const handleSortByDeadlineChange = () => {
    setSortByDeadline(!sortByDeadline);
  };
  const filteredAndSortedTodos = todos
    .filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterPriority || todo.important)
    )
    .sort((a, b) => {
      if (sortByDeadline) {
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      return 0;
    });

  return (
    <div className="App">
      <div className="search">
          <label>Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name"
          />
      </div>
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={filterPriority}
            onChange={handleFilterPriorityChange}
          />
          Show only priority tasks
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortByDeadline}
            onChange={handleSortByDeadlineChange}
          />
          Sort by deadline
        </label>
      </div>

      <h1>Todo List</h1>
      <ul className="todo_list">
        {filteredAndSortedTodos.map((i) => (
          <TodoList key={i.id} {...i} onDelete={handleDelete}
          onToggle={handleToggle}
          onPriorityToggle={handlePriorityToggle}/>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
