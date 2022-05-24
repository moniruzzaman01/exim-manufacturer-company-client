import React from "react";
import BusinessSummary from "../../Components/BusinessSummary";
import Carousel from "../../Components/Carousel";
import Contact from "../../Components/Contact";
import Parts from "../../Components/Parts";
import Review from "../../Components/Review";

const Home = () => {
  return (
    <div className=" grid grid-cols-1 gap-y-20">
      <Carousel />
      <Parts />
      <Review />
      <div>
        <BusinessSummary />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
