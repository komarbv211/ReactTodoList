import React from 'react';
import './todo-form-component.css'; 
import { useForm } from "react-hook-form";

export default function TodoForm({ onCreate}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTodo = {
      id: Date.now(),
      title: data.title,
      deadline: data.deadline,
      important: data.important || false,
      completed: false
    };
    onCreate(newTodo);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Task Title
        <input
          {...register("title", { required: true, minLength: 2 })}
          type="text"
        />
        {errors.title && <p>Task title is required (min 2 characters)</p>}
      </label>

      <label>
        Deadline
        <input {...register("deadline")} type="date" />
      </label>

      <label>
        Important
        <input {...register("important")} type="checkbox" />
      </label>

      <button type="submit">Add Task</button>
      <button type="reset">Cancel</button>
    </form>
  );
}
