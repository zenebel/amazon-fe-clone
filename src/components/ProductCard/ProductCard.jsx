import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price, image }) {
  console.log("productCard received:", { title, price, image });
  return (
    <div className="productCard">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
