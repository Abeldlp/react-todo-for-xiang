import { useState } from 'react';
import './TodoBody.css';

const TodoBody = (props) => {
  const { todo } = props;
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <div className={done ? 'todo_body_done' : 'todo_body_undone'}>
      <input type="checkbox" onChange={toggleDone} />
      <p>{todo}</p>
    </div>
  );
};

export default TodoBody;
