import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const del = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="w-[400px] p-6 bg-slate-200 rounded-md shadow-[0_2px_8px_black]">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Tasks</h1>
      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <h1>No tasks</h1>
        ) : (
          tasks.map((task) => (
            <div className="flex justify-between" key={task.id}>
              <p className="text-xl">{task.text}</p>
              <button
                className="border border-red-600 rounded-md px-2 hover:bg-red-600 hover:text-white"
                onClick={() => del(task.id)}
              >
                delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
