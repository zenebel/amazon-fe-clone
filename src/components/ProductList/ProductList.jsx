import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  // Handle empty or missing products
  if (!products || products.length === 0) {
    return (
      <div className="productList">
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={`$${product.price}`}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
