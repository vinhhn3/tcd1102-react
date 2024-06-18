import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h2>This Is My FYP</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
