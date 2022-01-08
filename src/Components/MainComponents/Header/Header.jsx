const Header = (props) => {
  const { name } = props;

  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
};

export default Header;
