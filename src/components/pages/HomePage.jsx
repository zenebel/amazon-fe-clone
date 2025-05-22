import React from "react";
import Banner from "../Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductList from "../../components/ProductList/ProductList";

function HomePage() {
  return (
    <div className="homepage">
      <h2>Welcome to the Home Page</h2>
      <p>This is where products and banners will go.</p>
      {/* render list here*/}
      <Banner />
      <ProductList />
    </div>
  );
}

export default HomePage;
