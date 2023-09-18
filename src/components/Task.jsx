import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const Task = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  };
  return (
    <div className="w-[400px] p-6 bg-slate-200 rounded-md shadow-[0_2px_8px_black]">
      <h1 className="text-3xl font-semibold text-center mb-6">Add Your Task</h1>
      <form>
        <input
          type="text"
          placeholder="add your task here..."
          className="w-full px-4 py-2 text-xl text-slate-700 rounded-md focus:outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="w-full py-2 bg-black text-white text-xl font-semibold rounded-md hover:bg-black/80 mt-4"
          onClick={handleSubmit}
        >
          +ADD
        </button>
      </form>
    </div>
  );
};

export default Task;
