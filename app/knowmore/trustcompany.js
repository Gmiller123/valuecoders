import React from "react";
import Image from "next/image";

const TrustCompany = () => {
  return (
    <div className=" md:block hidden">
      <div className=" max-w-[1480px] px-5 lg:flex justify-center items-center mx-auto py-[22px] gap-10">
        <h4 className=" text-[#AAADB6] lg:text-left text-center lg:mb-0 mb-5 text-xs uppercase basis-[15%] leading-5">
          Trusted by startups and for fortune 500 companies
        </h4>
        <Image
          src="/banner-client-logo.svg"
          width="1500"
          height="1500"
          alt=""
          className="basis-[85%]"
        />
      </div>
    </div>
  );
};

export default TrustCompany;
