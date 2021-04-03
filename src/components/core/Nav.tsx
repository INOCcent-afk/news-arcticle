import React from "react";
import "../../assets/scss/Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <h1>CURRENT NEWS: </h1>
      <ul className="nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
