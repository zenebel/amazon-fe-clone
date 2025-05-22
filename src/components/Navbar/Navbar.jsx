import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          height="30"
        />
      </div>

      {/* Search Bar */}
      <div className="navbar__search">
        <input
          type="text"
          className="navbar__searchInput"
          placeholder="Search Amazon"
        />
        <button className="navbar__searchButton">🔍</button>
      </div>

      {/* Right Nav options */}
      <div className="navbar_option">
        <div className="navbar-option">
          <span>Hello,Lydia</span>
          <span>
            <strong>Account & Lists</strong>
          </span>
        </div>
      </div>

      <div className="navbar_option">
        <span>Returns</span>
        <span>
          <strong>Orders</strong>
        </span>
      </div>

      <div className="navbar_option navbar_cart">
        <span>🛒</span>
        <span>
          <strong>Cart</strong>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
