import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import amazonLogo from "../../assets/logos/amazon.png";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      {/* Home Button */}
      <div className="navbar_option">
        <Link to="/" className="navbar_link">
          🏠 Home
        </Link>
      </div>

      {/* Logo */}
      <div className="navbar__logo">
        <img src={amazonLogo} alt="Amazon Logo" height="30" />
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

      {/*Login/Logout UI */}
      <div className="navbar_option">
        {token ? (
          <div
            className="navbar-option"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <span>Hello, Lydia</span>
            <span>
              <strong>Logout</strong>
            </span>
          </div>
        ) : (
          <Link to="/login" className="navbar-option">
            <span>Hello, Guest</span>
            <span>
              <strong>Login</strong>
            </span>
          </Link>
        )}
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

      <Link to="/cart" className="navbar_option navbar_cart">
        <span>🛒</span>
        <span>
          <strong>Cart ({cartItems.length})</strong>
        </span>
      </Link>
    </header>
  );
}

export default Navbar;
