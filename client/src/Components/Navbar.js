import React from "react";

const Navbar = () => {
  const handleNavClick = (event) => {
    console.log(event.target.id);
  };

  const navButtons = ["Home", "Show Reports", "New Report", "ToDo List"];
  const buttons = navButtons.map((btn, key) => (
    <button id={key} key={key} onClick={handleNavClick}>
      {btn}
    </button>
  ));

  return <div className="navbar">{buttons}</div>;
};

export default Navbar;
