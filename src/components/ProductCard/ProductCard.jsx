import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, title, price, image }) {
  return (
    <Link to={`/product/${id}`} className="productCard__link">
      <div className="productCard">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </Link>
  );
}

export default ProductCard;
