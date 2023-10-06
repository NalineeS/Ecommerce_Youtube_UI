import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarosalData } from "./MainCarosalData";

const MainCarousel = () => {
  const items = MainCarosalData.map((item) => (
    <img
      src={item.image}
      className="cursor-pointer w-full"
      role="presentation"
      alt=""
    />
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
