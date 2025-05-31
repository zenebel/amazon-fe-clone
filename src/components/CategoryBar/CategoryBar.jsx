// src/components/CategoryBar/CategoryBar.jsx
import React from "react";
import "./CategoryBar.css";

const CategoryBar = () => {
  return (
    <div className="categoryBar">
      <ul className="categoryBar__list">
        <li>All</li>
        <li>Rufus</li>
        <li>Amazon Haul</li>
        <li>Same-Day Delivery</li>
        <li>Medical Care</li>
        <li>Saks</li>
        <li>Groceries</li>
        <li>Buy Again</li>
        <li>Amazon Business</li>
        <li>Shop By Interest</li>
        <li>Pharmacy</li>
        <li>Kindle Books</li>
        <li>Books</li>
        <li>Handmade</li>
        <li>Gift Cards</li>
        <li>Browsing History</li>
        <li>Subscribe & Save</li>
      </ul>
    </div>
  );
};

export default CategoryBar;
