import { useState } from 'react';
import Header from './MainComponents/Header/Header';
import TodoBody from './MainComponents/TodoBody/TodoBody';
import TodoClearSection from './MainComponents/TodoClearSection/TodoClearSection';
import TodoInput from './MainComponents/TodoInput/TodoInput';
import './MainIndex.css';

const MainIndex = () => {
  const [todos, setTodos] = useState(['something todo', 'something else']);

  const addNewtodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <Header name="Abel" />
      <TodoInput handleNewTodo={addNewtodo} />
      <div className="todos_container">
        {todos.map((todo, index) => (
          <TodoBody todo={todo} key={index} />
        ))}
      </div>
      <TodoClearSection handleBooks={clearTodos} />
    </div>
  );
};

export default MainIndex;
