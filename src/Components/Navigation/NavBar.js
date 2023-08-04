import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-links">
        Home
      </Link>
      <Link to="/Students" className="nav-links">
        Students
      </Link>
      <Link to="/Contact" className="nav-links">
        Contact
      </Link>
    </div>
  );
}

export default Nav;
