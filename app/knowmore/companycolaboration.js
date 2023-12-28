import React from "react";
import Image from "next/image";

const CompanyColaboration = () => {
  return (
    <div className=" pb-[120px]">
      <div className=" max-w-[1480px] mx-auto px-5">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className=" flex items-start justify-center lg:justify-start">
            <Image
              src="/global-companies.webp"
              height="1500"
              width="1500"
              alt=""
              className="w-[650px] h-auto"
            />
          </div>
          <div className=" pt-5 sm:row-start-1 lg:row-start-auto">
            <h1 className=" mb-5 text-[22px] lg:text-[32px] text-[#05164D] font-semibold ">
              We’ve Collaborated with Companies Worldwide
            </h1>
            <p className=" mb-5 text-[#3f3f3f] leading-[26px] lg:text-base text-sm">
              Our software development firm has had the honor of partnering with
              many outstanding global enterprises throughout our journey. We
              have consistently delivered exceptional, customized solutions to
              meet their distinct needs and requirements.v
            </p>

            <ul className=" grid lg:grid-cols-2 gap-[10px] lg:gap-[20px] text-sm lg:text-base text-[#3f3f3f]">
              <li className=" flex items-center justify-start gap-2">
                <Image
                  src="/tick-icon.webp"
                  height="1500"
                  width="1500"
                  alt=""
                  className="h-4 w-4"
                />
                18+ Yrs of Tech Mastery
              </li>
              <li className=" flex items-center justify-start gap-2">
                <Image
                  src="/tick-icon.webp"
                  height="1500"
                  width="1500"
                  alt=""
                  className="h-4 w-4"
                />
                18+ Yrs of Tech Mastery
              </li>
              <li className=" flex items-center justify-start gap-2">
                <Image
                  src="/tick-icon.webp"
                  height="1500"
                  width="1500"
                  alt=""
                  className="h-4 w-4"
                />
                18+ Yrs of Tech Mastery
              </li>
              <li className=" flex items-center justify-start gap-2">
                <Image
                  src="/tick-icon.webp"
                  height="1500"
                  width="1500"
                  alt=""
                  className="h-4 w-4"
                />
                18+ Yrs of Tech Mastery
              </li>
              <li className=" flex items-center justify-start gap-2">
                <Image
                  src="/tick-icon.webp"
                  height="1500"
                  width="1500"
                  alt=""
                  className="h-4 w-4"
                />
                18+ Yrs of Tech Mastery
              </li>
              <li className=" flex items-center justify-start gap-2">
                <Image
                  src="/tick-icon.webp"
                  height="1500"
                  width="1500"
                  alt=""
                  className="h-4 w-4"
                />
                18+ Yrs of Tech Mastery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyColaboration;
