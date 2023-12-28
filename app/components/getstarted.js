import React from "react";
import Image from "next/image";
import styles from "./getstarted.module.css";
import ButtonComponentNav from "./button1";

const GetStarted = () => {
  return (
    <>
      <div className={` ${styles.gradient} `}>
        <div className=" max-w-[1480px] w-full mx-auto px-[20px] lg:flex justify-between items-center py-[70px]">
          <div className=" basis-[40%]">
            <h1 className=" text-white text-[22px] lg:text-[36px] mb-[20px] lg:text-left text-center">
              Discover Digital Excellence
            </h1>
            <p className=" text-[#9b9b9b] lg:text-left text-center text-sm lg:text-base">
              Explore our digital solutions to help your business stay at the
              forefront of technology.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <ButtonComponentNav />
            </div>
          </div>
          <div className=" basis-[40%] lg:block hidden">
            <Image
              width="1500"
              height="1500"
              src="/getstarted.webp"
              alt="get_started_img"
              className=" w-[350px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
