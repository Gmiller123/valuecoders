import React from "react";
import Image from "next/image";

const CtoService = () => {
  return (
    <div className=" py-[50px] lg:py-[120px]">
      <div className=" max-w-[1480px] mx-auto px-5">
        <div className=" lg:flex items-start justify-between ">
          <div className=" flex-1">
            <h1 className=" lg:max-w-[600px] font-semibold text-[#05164d] text-[22px] lg:text-[36px] mb-2 lg:mb-5">
              How Our CTO Services Can Help Your Business Grow?
            </h1>
          </div>
          <div className=" flex-1 lg:pl-[80px]">
            <p className=" text-[#3f3f3f] lg:leading-[26px] text-sm lg:text-base">
              Companies often hire Chief Technology Officers when they require
              high-level technical professionals to oversee their software
              design and development process. We provide the following CTO as a
              service option for startups and enterprises.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-[40px] lg:mt-[80px] lg:flex justify-between items-start">
          <div className=" flex-1 lg:mb-0 md:mb-10">
            <h3 className="md:mb-[15px] font-semibold text-lg lg:text-xl text-[#3f3f3f]">
              For Startups
            </h3>
            <p className=" max-w-[600px] pr-[50px] text-sm lg:text-base text-[#666666] lg:leading-[28px]">
              Our CTO services help startups design their product, create the
              required infrastructure, and maintain the culture.
            </p>
            <div className=" md:flex items-start gap-20">
              <div className="basis-[35%] mt-5 lg:mt-[50px]">
                <Image
                  className=" lg:size-12 size-8 mb-5"
                  width="1500"
                  height="1500"
                  src="/cto-01.webp"
                  alt=""
                />

                <h3 className=" text-base text-[#3f3f3f] font-semibold pt-5 mb-2 lg:mb-0 border-t border-gray-300">
                  Design The Product
                </h3>
                <ul className=" text-[#656565] flex flex-col text-sm lg:text-base list-disc marker:text-[#FFAD00] marker:text-[30px] pl-7">
                  <li className="marker:m-0">Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                </ul>
              </div>
              <div className=" basis-[35%] mt-5 lg:mt-[50px]">
                <Image
                  className=" lg:size-12 size-8 mb-5"
                  width="1500"
                  height="1500"
                  src="/cto-01.webp"
                  alt=""
                />
                <h3 className=" text-base text-[#3f3f3f] font-semibold pt-5 mb-2 lg:mb-0 border-t border-gray-300">
                  Design The Product
                </h3>
                <ul className="text-[#656565] flex items-start justify-start text-sm lg:text-base flex-col list-disc marker:text-[#FFAD00] marker:text-[30px] pl-7">
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" flex-1 lg:pl-[80px] lg:mt-0 mt-6">
            <h3 className=" lg:mb-[15px] text-[#3f3f3f] text-[20px] font-semibold">
              For Enterprise
            </h3>
            <p className=" text-sm lg:text-base text-[#666666] max-w-[600px] lg:leading-[28px]">
              Our CTO services help enterprises to enhance their product,
              improve infrastructure, and enhance their culture.
            </p>
            <div className=" md:flex items-start gap-16 md:gap-20">
              <div className="basis-[35%] mt-5 lg:mt-[50px]">
                <Image
                  className=" lg:size-12 size-8 mb-5"
                  width="1500"
                  height="1500"
                  src="/cto-01.webp"
                  alt=""
                />

                <h3 className=" text-base text-[#3f3f3f] font-semibold pt-5 mb-2 lg:mb-0 border-t border-gray-300">
                  Design The Product
                </h3>
                <ul className=" text-[#656565] flex flex-col list-disc text-sm lg:text-base marker:text-[#FFAD00] marker:text-[30px]  pl-7">
                  <li className="marker:m-0">Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                </ul>
              </div>
              <div className=" basis-[35%] mt-5 lg:mt-[50px]">
                <Image
                  className=" lg:size-12 size-8 mb-5"
                  width="1500"
                  height="1500"
                  src="/cto-01.webp"
                  alt=""
                />
                <h3 className=" text-base text-[#3f3f3f] font-semibold pt-5 mb-2 lg:mb-0 border-t border-gray-300">
                  Design The Product
                </h3>
                <ul className="text-[#656565] flex flex-col list-disc text-sm lg:text-base marker:text-[#FFAD00] marker:text-[30px] pl-7">
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                  <li>Architecture consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtoService;
