// src/components/ProductList/ProductList.jsx

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import "./ProductList.css";
import { fetchProducts } from "../../utils/helpers"; // ✅ make sure this only exports a function

function ProductList() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching from useEffect...");
    fetchProducts().then((data) => {
      console.log("Fetched data:", data);
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="productList">
      {loading ? (
        <Loader />
      ) : (
        products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={`$${item.price}`}
            image={item.image}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
