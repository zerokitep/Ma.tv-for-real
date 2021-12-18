import React from "react";
import "../../styles/Nav.css";
import logo from "./logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <img className="nav-logo" src={logo} alt="MA-logo" />
    </div>
  );
};

export default Nav;
