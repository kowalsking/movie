import React from "react";
import H2 from "./H2";

const Header = ({ text }) => {
  return (
    <header className="App-header">
      <H2>{text}</H2>
    </header>
  );
};

export default Header;
