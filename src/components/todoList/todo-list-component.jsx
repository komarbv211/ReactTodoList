// src/components/todoList/todo-list-component.jsx
import React from 'react';
import './todo-list-component.css';

export default function TodoList({
  id,
  title,
  deadline,
  important,
  completed,
  onDelete,
  onToggle,
  onPriorityToggle
}) {
  return (
    <li className={`todo_item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      {important && <span className="exclamation">!</span>}
      <span>{title}</span>
      {deadline && <span className="deadline">{deadline}</span>}
      <div className='delete-todo'>
        <button className="delete-btn" onClick={() => onDelete(id)}>X</button>
      </div>
    </li>
  );
}
