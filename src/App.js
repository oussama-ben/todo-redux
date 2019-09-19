import React from 'react';
import './App.css';
import ToDoAdd from './components/ToDoAdd';
import TodoList from './components/todoList'

const App=()=> {
  return (
    <div className="App">
      <ToDoAdd/>
      <TodoList/>
      
    </div>
  );
}

export default App;