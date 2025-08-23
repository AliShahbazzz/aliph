import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CarouselImg } from "../assets/carousel-images";

export const HomeCarousel: React.FC = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} className="home-carousel">
      <img src={CarouselImg.One} />

      <img src={CarouselImg.Two} />

      <img src={CarouselImg.Three} />
    </Carousel>
  );
};
