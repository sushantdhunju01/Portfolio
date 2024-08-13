import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h1>Portfolio</h1>
        <div className="links">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
