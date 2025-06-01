import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import promo1 from "../../assets/promo/Promo-1.jpg";
import promo2 from "../../assets/promo/Promo-2.jpg";
import promo3 from "../../assets/promo/Promo-3.jpg";
import promo4 from "../../assets/promo/Promo-4.jpg";
import promo5 from "../../assets/promo/Promo-5.jpg";

function FeaturedCarousel() {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src={promo1} alt="Promo 1" />
      </div>
      <div>
        <img src={promo2} alt="Promo 2" />
      </div>
      <div>
        <img src={promo3} alt="Promo 3" />
      </div>
      <div>
        <img src={promo4} alt="Promo 4" />
      </div>
      <div>
        <img src={promo5} alt="Promo 5" />
      </div>
    </Carousel>
  );
}

export default FeaturedCarousel;
