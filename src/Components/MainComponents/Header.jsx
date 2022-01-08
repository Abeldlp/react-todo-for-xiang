import { useState, useEffect } from 'react';

const Header = (props) => {
  const { name } = props;

  const [number, setNumber] = useState(0);

  const decrementNumber = () => {
    number > 0 && setNumber(number - 1);
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    setNumber(10);
  }, []);

  return (
    <div>
      <h1>Header Component</h1>
      <p>Welcome {name}</p>
      <p>{number}</p>
      <button onClick={decrementNumber}>Decrement</button>
      <button onClick={incrementNumber}>Increment</button>
    </div>
  );
};

export default Header;
