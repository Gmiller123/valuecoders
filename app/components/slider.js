import React from "react";
import { CarouselSpacing } from "./carousel";

const SliderTestimonials = () => {
  return (
    <div className=" py-[50px] lg:pt-[120px]">
      <div className=" max-w-[1480px] mx-auto px-5">
        <div>
          <h1 className=" text-[22px] lg:text-[32px] font-semibold text-center mb-5">
            What Our Clients Have to Say About Us
          </h1>
          <p className=" mb-5 text-center text-sm lg:text-base max-w-[1100px] mx-auto">
            We are grateful for our clients&apos; trust in us, and we take great
            pride in delivering quality solutions that exceed their
            expectations. Here is what some of them have to say about us:
          </p>
        </div>
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default SliderTestimonials;
