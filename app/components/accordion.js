import React from "react";
import Image from "next/image";
import { AccordionCustomIcon } from "./accordioncomponent";

const AccordionItems = () => {
  return (
    <>
      <section className=" px-6">
        <div className=" lg:flex overflow-hidden">
          <div className=" flex-1">
            <div className=" lg:pl-[74px] lg:pb-[80px] lg:pr-[45px] lg:pt-[120px]">
              <h1 className=" text-[22px] lg:text-[32px] font-semibold">
                Software Development & Engineering Services
              </h1>
              <p className=" text-sm lg:text-base mt-2">
                Driven by the top 1% of software engineering talent in India, we
                deliver robust, scalable, and reliable software product
                solutions to clients across the globe.
              </p>
            </div>

            <Image
              width="1500"
              height="1500"
              src="/home-image.png.webp"
              alt=""
              className=" h-full w-full object-cover object-center-bottom lg:block hidden"
            />
          </div>
          <div className=" flex-1 lg:bg-[#f8f8f8] lg:py-[120px] py-[50px]">
            <div className=" lg:pl-20 lg:pr-52">
              <AccordionCustomIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccordionItems;
