import React from "react";

const RelatedServices = () => {
  return (
    <div className=" bg-[#f8f8f8] py-[50px]">
      <div className=" max-w-[1480px] mx-auto px-5">
        <h1 className=" font-semibold text-[#3f3f3f] text-xl">
          Related Services:
        </h1>
        <div className=" mt-[25px] text-[#656565] flex gap-5 flex-wrap">
          <button className=" px-5 py-3 text-base font-semibold rounded-full border border-black border-opacity-20 bg-[#e8e3e3]/50 hover:border-[#FFAD00] hover:bg-[#e9d7ad]">
            Custom Software Development
          </button>
          <button className=" px-5 py-3 text-base font-semibold rounded-full border border-black border-opacity-20 bg-[#e8e3e3]/50 hover:border-[#FFAD00] hover:bg-[#e9d7ad]">
            Software outsourcing
          </button>
          <button className=" px-5 py-3 text-base font-semibold rounded-full border border-black border-opacity-20 bg-[#e8e3e3]/50 hover:border-[#FFAD00] hover:bg-[#e9d7ad]">
            IT Consulting
          </button>
          <button className=" px-5 py-3 text-base font-semibold rounded-full border border-black border-opacity-20 bg-[#e8e3e3]/50 hover:border-[#FFAD00] hover:bg-[#e9d7ad]">
            Digital Transformation
          </button>
          <button className=" px-5 py-3 text-base font-semibold rounded-full border border-black border-opacity-20 bg-[#e8e3e3]/50 hover:border-[#FFAD00] hover:bg-[#e9d7ad]">
            On-Demand Teams
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
