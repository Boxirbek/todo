import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'To study React fundamentals', done: false },
    { text: 'To study React fundamentals', done: false },
    { text: 'To study React fundamentals', done: false },
    { text: 'To study React fundamentals', done: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTodos([...todos, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="w-full p-2 rounded-lg bg-gray-700 text-white mb-2"
          />
          <button
            onClick={addTask}
            className="w-full p-2 rounded-lg bg-purple-600 text-white"
          >
            Add Task
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Tasks to do - {todos.filter(todo => !todo.done).length}</h2>
          {todos.filter(todo => !todo.done).map((todo, index) => (
            <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded">
              <span>{todo.text}</span>
              <div>
                <button onClick={() => toggleTodo(index)} className="text-green-400 mr-2">✔</button>
                <button onClick={() => setTodos(todos.filter((_, i) => i !== index))} className="text-red-400">🗑️</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-4">
          <h2 className="text-2xl mb-4">Done - {todos.filter(todo => todo.done).length}</h2>
          {todos.filter(todo => todo.done).map((todo, index) => (
            <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded">
              <span className="line-through">{todo.text}</span>
              <div>
                <button onClick={() => toggleTodo(index)} className="text-red-400">↩</button>
                <button onClick={() => setTodos(todos.filter((_, i) => i !== index))} className="text-red-400">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
