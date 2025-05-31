import React from "react";
import Banner from "../Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import FeaturedCarousel from "../Carousel/FeaturedCarousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductList from "../ProductList/ProductList";
import { productsData } from "../../utils/productsData";

function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <FeaturedCarousel />
      <ProductList products={productsData} />
    </div>
  );
}

export default HomePage;
