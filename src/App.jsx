import React from 'react';
import Task from './components/Task';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="bg-black/50 w-full h-screen flex items-center justify-center flex-col gap-8">
      <Task />
      <TaskList />
    </div>
  );
};

export default App;
