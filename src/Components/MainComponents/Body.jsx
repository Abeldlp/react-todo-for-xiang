import { useState } from 'react';
const Body = (props) => {
  const { male, firstname } = props;
  const [name, setName] = useState(firstname);

  const formatName = (isMale) => {
    return isMale ? `Mr. ${name}` : `Ms. ${name}`;
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>Welcome {formatName(male)}</p>
      <input onChange={handleChange} />
    </div>
  );
};

export default Body;
