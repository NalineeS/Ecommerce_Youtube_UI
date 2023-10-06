import React from "react";
import MainCarousel from "../components/HomeCarosal/MainCarousel";
import HomeSectionCarosal from "../components/HomeSectionCarosal/HomeSectionCarosal";
import { mens_kurta } from "../../Data/mens-kurta";

const Homepage = () => {
  return (
    <>
      <div>
        <MainCarousel/>
      </div>

      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </>
  );
};
export default Homepage;
