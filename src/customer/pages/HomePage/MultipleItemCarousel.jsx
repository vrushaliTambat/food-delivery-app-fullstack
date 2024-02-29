import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeals } from "./TopMeals";
import CarouselItems from "./CarouselItems";

const MultipleItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    authplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeals.map((item) => (
          <CarouselItems image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemCarousel;
