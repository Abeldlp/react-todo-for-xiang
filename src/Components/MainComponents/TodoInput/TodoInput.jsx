import { useState } from 'react';
import './TodoInput.css';
const TodoInput = (props) => {
  const { handleNewTodo } = props;
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const saveTodo = (e) => {
    e.preventDefault();
    handleNewTodo(todo);
    setTodo('');
  };

  return (
    <div>
      <form>
        <input onChange={handleChange} value={todo} />
        <button onClick={saveTodo}>Save</button>
      </form>
    </div>
  );
};

export default TodoInput;
