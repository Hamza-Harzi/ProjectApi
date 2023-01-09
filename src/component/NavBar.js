import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <ul className="ul-list">
        <li className="list">
          <Link to="/">Houme</Link>
        </li>

        <li className="list">
          <Link to="/about">About</Link>
        </li>

        <li className="list">
          <Link to="/info">Info</Link>
        </li>

        <li className="list">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
