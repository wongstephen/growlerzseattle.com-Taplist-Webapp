import React from "react";
import logo from "../public/assets/logo-clear-bg.webp";

const Header = ({ children }) => {
  return (
    <header>
      <div>
        <img src={logo} className="logo" />
      </div>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
