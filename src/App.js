import React, { useEffect, useState } from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions

  useEffect(() => {
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(item => item.completed))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(item => !item.completed))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div>
      <header>
        <h1>Todo List ReactJS</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;