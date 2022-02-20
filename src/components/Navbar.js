import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3>Alpha-test</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Search Animals</Link>
          </li>
          <li>
            <Link to="/mui">Material Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
