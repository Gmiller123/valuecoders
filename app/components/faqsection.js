import React from "react";
import { FaqAccordion } from "./faqaccordion";

const FaqSection = () => {
  return (
    <div className=" max-w-[1480px] mx-auto lg:px-20 px-5 py-[50px] lg:py-[150px]">
      <div className=" flex flex-col items-start lg:items-center justify-center">
        <h1 className=" text-[22px] lg:text-4xl mb-1 lg:mb-5 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className=" text-base">
          Here are some questions related to software outsourcing that our
          clients frequently ask:
        </p>
        <div className=" lg:p-20 max-w-[1080px]">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
