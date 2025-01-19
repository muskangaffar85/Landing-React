import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>My Shop</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
