import React from "react";
import "./Footer.css";
import amazonLogo from "../../assets/logos/amazon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__backToTop">Back to top</div>
      <div className="footer__regionBar">
        <img src={amazonLogo} alt="Amazon Logo" height="30" />
        <button>🌐 English</button>
        <button>🇺🇸 United States</button>
      </div>

      <div className="footer__links">
        <div className="footer__column">
          <h4>Get to Know Us</h4>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
