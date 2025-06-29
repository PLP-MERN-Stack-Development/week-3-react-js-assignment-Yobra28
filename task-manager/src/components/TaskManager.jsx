import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks(prevTasks => [...prevTasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently with our simple task manager.
        </p>
      </div>

      {/* Add Task Form */}
      <Card className="mb-6">
        <form onSubmit={addTask} className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button type="submit" disabled={!newTask.trim()}>
            Add Task
          </Button>
        </form>
      </Card>

      {/* Task Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="text-center">
          <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
          <div className="text-gray-600 dark:text-gray-400">Total Tasks</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-green-600">{activeCount}</div>
          <div className="text-gray-600 dark:text-gray-400">Active Tasks</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-purple-600">{completedCount}</div>
          <div className="text-gray-600 dark:text-gray-400">Completed Tasks</div>
        </Card>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All ({tasks.length})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({activeCount})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({completedCount})
        </Button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              {filter === 'all' 
                ? 'No tasks yet. Add your first task above!' 
                : `No ${filter} tasks.`
              }
            </p>
          </Card>
        ) : (
          filteredTasks.map(task => (
            <Card key={task.id} className="flex items-center justify-between" hover>
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                  {task.text}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager; 