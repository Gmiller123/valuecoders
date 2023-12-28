import React from "react";
import Image from "next/image";
import Login from "./formik";

const FormBooking = () => {
  return (
    <div className=" py-[50px] lg:py-[120px]">
      <div className=" max-w-[1480px] mx-auto px-[20px]">
        <div className=" lg:flex justify-between gap-40">
          <div className=" basis-[40%]">
            <h1 className=" text-[22px] lg:text-[32px] lg:mb-2.5 font-semibold">
              Book Free Consultation
            </h1>
            <p className=" text-sm lg:text-base text-[#666666] mb-[20px] lg:mb-[40px]">
              Guaranteed response within 8 business hours.
            </p>

            <ul className=" list-disc list-inside lg:marker:text-[24px] marker:text-[20px] marker:text-[#FFAD00]">
              <li className=" text-base lg:text-[20px] mb-3 lg:mb-10">
                Fill up your details
                <p className=" text-xs mt-1 lg:mt-0 lg:text-[15px] pl-[27px] lg:pl-[32px]">
                  Get Custom Solutions, Recommendations, Estimates.
                </p>
              </li>
              <li className="text-base lg:text-[20px] mb-2 lg:mb-10">
                What's next?
                <p className=" text-xs mt-1 lg:mt-0 lg:text-[15px] pl-[27px] lg:pl-[32px]">
                  One of our Account Managers will contact you shortly
                </p>
              </li>
            </ul>
            <Image
              src="/home-partner-logo.webp"
              width={1500}
              height={1500}
              alt="img-group"
              className="w-[650px] mt-8 lg:mt-16"
            />
          </div>
          <div className=" basis-[60%]">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBooking;
