import React from "react";
import ButtonComponentNav from "./button1";

const Experience = () => {
  return (
    <>
      <div className=" bg-[#211f47]">
        <div className=" py-[50px] lg:py-[70px] max-w-[1480px] w-full mx-auto px-[20px] lg:flex justify-between">
          <div className="md:py-[20px] pb-10">
            <h1 className="text-white font-semibold text-[22px] lg:text-[32px] mb-5">
              Got a Project in Mind?
            </h1>
            <p className=" text-[#9b9b9b]">
              Let's embark on a journey to transform your idea into a compelling
              digital presence.
            </p>
            <div className=" mt-10">
              <ButtonComponentNav />
            </div>
          </div>

          <div className=" flex flex-wrap items-start justify-start gap-10">
            <div className=" border-2 border-[#9b9b9b] text-xs md:text-lg rounded-full size-28 lg:size-40 text-white relative flex items-center justify-center transition-all duration-500 transform-gpu hover:skew-y-6">
              <div className=" absolute ">
                <h1 className=" text-center">675+</h1>
                <p>Full-time Staff</p>
              </div>
            </div>
            <div className=" border-2 border-[#9b9b9b] rounded-full text-xs md:text-lg size-28 lg:size-40 text-white relative flex items-center justify-center transition-all duration-500 transform-gpu hover:skew-x-6">
              <div className=" absolute ">
                <h1 className=" text-center">675+</h1>
                <p>Full-time Staff</p>
              </div>
            </div>
            <div className=" border-2 border-[#9b9b9b] rounded-full text-xs md:text-lg size-28 lg:size-40 text-white relative flex items-center justify-center transition-all duration-500 transform-gpu hover:skew-y-6">
              <div className=" absolute ">
                <h1 className=" text-center">675+</h1>
                <p>Full-time Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
