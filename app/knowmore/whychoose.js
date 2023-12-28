import React from "react";
import Image from "next/image";

const WhyChooses = () => {
  return (
    <div className=" py-[50px] lg:py-[120px]">
      <div className=" max-w-[1480px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <h1 className=" text-[22px] font-semibold lg:text-[32px] mb-5 text-[#05164D]">
              Why Choose ValueCoders?
            </h1>
            <p className=" text-[#666666] leading-[29px] lg:text-base text-sm">
              With over years of experience, ValueCoders is a renowned name in
              the realm of top-tier software product development firms,
              specializing in outsourcing services. Our seasoned team of app
              consultants, programmers, and designers is dedicated to delivering
              exceptionally secure, resilient, and cost-effective software
              development solutions.
            </p>

            <ul className="grid lg:grid-cols-2 md:space-y-0 space-y-1 list-disc pl-6 text-sm lg:text-base text-[#656565] mt-[15px] lg:mt-[30px] marker:text-[#FFAD00] marker:text-2xl">
              <li>India&apos;s Top 1% Software Talent</li>
              <li>India&apos;s Top 1% Software Talent</li>
              <li>India&apos;s Top 1% Software Talent</li>
              <li>India&apos;s Top 1% Software Talent</li>
              <li>India&apos;s Top 1% Software Talent</li>
              <li>India&apos;s Top 1% Software Talent</li>
            </ul>

            <h3 className=" font-semibold text-[#05164D] mt-[40px] text-lg">
              Awards & Certifications -
            </h3>

            <Image
              src="/award-logo.svg"
              height="1500"
              width="1500"
              alt=""
              className="w-[600px] h-auto pt-6 "
            />
          </div>

          <div className=" flex justify-start lg:mt-0 mt-10 lg:justify-end">
            <Image
              src="/counter-image.svg"
              height="1500"
              width="1500"
              alt=""
              className="w-[550px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooses;
