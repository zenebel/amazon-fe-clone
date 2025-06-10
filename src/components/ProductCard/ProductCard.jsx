import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product || (!product.name && !product.title)) return null;

  const handleAdd = () => {
    const cartItem = {
      id: product.id,
      name: product.title || product.name,
      price: product.price,
      image: product.image || "https://via.placeholder.com/150",
    };

    addToCart(cartItem);
    navigate("/cart");
  };

  return (
    <div className="product-card">
      {product.image && (
        <img
          src={product.image}
          alt={product.name || product.title}
          className="product-card__image"
        />
      )}
      <h3>{product.name || product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
