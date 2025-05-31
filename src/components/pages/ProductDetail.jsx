import React from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../../utils/productsData"; // reuse the mock data
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams(); //gets product id from URL
  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating} ⭐ ({product.reviewCount}{" "}
        reviews)
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Availability:</strong>{" "}
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "underline",
          color: "#007185",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        ← Back to Shop
      </Link>
    </div>
  );
}

export default ProductDetail;
