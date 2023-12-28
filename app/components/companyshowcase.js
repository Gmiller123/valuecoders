import React from "react";
import Image from "next/image";
import styles from "./companyshowcase.module.css";

const CompanyShowCase = () => {
  return (
    <div className=" max-w-[1300px] mx-auto">
      <div className="py-[39px] flex flex-col items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center w-full">
          <span className="border border-black w-full"></span>
          <span className="px-5 w-full font-semibold text-xl whitespace-nowrap">
            Trusted by startups and Fortune
            <span className=" text-[#FFAD00]">500</span> companies
          </span>
          <span className="border border-black w-full"></span>
        </div>
        <div className={`${styles.animations} w-2xl flex py-6`}>
          <Image
            src="/banner.webp"
            width="1500"
            height="1500"
            alt="banner"
            className="w-[62.5rem]"
          />
          <Image
            src="/banner.webp"
            width="1500"
            height="1500"
            alt="banner"
            className="w-[62.5rem]"
          />
          <Image
            src="/banner.webp"
            width="1500"
            height="1500"
            alt="banner"
            className="w-[62.5rem]"
          />
        </div>
        <span className="border border-black w-full"></span>
      </div>
    </div>
  );
};

export default CompanyShowCase;
