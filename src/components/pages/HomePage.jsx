import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import { productsData } from "../../utils/productsData";

function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <ProductList products={productsData} />
    </div>
  );
}

export default HomePage;
