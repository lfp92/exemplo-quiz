import React from "react";

const Header = ({ title, texto }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2 data-resultado={texto.split("/")[0].trim()}>{texto}</h2>
    </header>
  );
};

export default Header;
