import React from "react";
import styles from "../components/getstarted.module.css";
import ButtonLearnMore from "./buttons";

const SoftwareStrategy = () => {
  return (
    <>
      <div className={` ${styles.gradient} `}>
        <div className=" max-w-[1480px] w-full mx-auto px-[20px] flex flex-col justify-center text-center items-center py-[70px]">
          <h1 className=" text-white text-[22px] lg:text-[32px] mb-[20px] font-semibold">
            Elevate Your Software Strategy
          </h1>
          <p className=" text-[#9b9b9b] lg:text-base text-sm text-center">
            Outsource Your Product Development to Industry Experts.
          </p>
          <ButtonLearnMore />
        </div>
      </div>
    </>
  );
};

export default SoftwareStrategy;
