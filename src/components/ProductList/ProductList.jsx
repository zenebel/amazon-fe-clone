import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="productList">
      <ProductCard
        title="Apple AirPods Pro"
        price="$199.99"
        image="https://m.media-amazon.com/images/I/81KkrQWEHIL._AC_SL1500_.jpg"
      />
      <ProductCard
        title="Echo Dot (5th Gen)"
        price="$49.99"
        image="https://m.media-amazon.com/images/I/61u48FEs3xL._AC_SL1000_.jpg"
      />
      <ProductCard
        title="Kindle Paperwhite"
        price="$139.99"
        image="https://m.media-amazon.com/images/I/61nBzv5xjBL._AC_SL1000_.jpg"
      />
    </div>
  );
}

export default ProductList;
