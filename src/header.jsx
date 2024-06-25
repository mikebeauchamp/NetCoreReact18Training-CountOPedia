import logo from "./images/react.png";

function MainHeader() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4 m-2 text-white-50">
        React Course - TaskOPedia
      </span>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader />
    </div>
  );
};

export default Header;