import add from "../img/add.ico";

const Header = ({ setModal }) => {
  return (
    <div>
      <h1 className="header">My React Task List</h1>
      <img id="add" src={add} alt="" onClick={() => setModal(true)} />
    </div>
  );
};

export default Header;
