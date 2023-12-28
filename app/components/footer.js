import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" bg-[#05164d] ">
      <div className=" max-w-[1480px] mx-auto px-5 py-5">
        <div className=" flex items-center md:justify-between justify-center md:gap-0 gap-8 flex-wrap">
          <div className=" text-[#8e8c8c] text-[14px]">
            <p>Copyright © 2004 - 2023. All Rights Reserved. ValueCoders.com</p>
            <ul className=" flex flex-wrap gap-3 mt-[7px] ">
              <a
                className=" hover:text-[#eee9e9] transition-all duration-500"
                href=""
              >
                Become a Partner
              </a>

              <span className="border border-[#8e8c8c] border-opacity-60 mx-2"></span>

              <a
                className=" hover:text-[#e7e0e0] transition-all duration-500"
                href=""
              >
                Privacy Policy
              </a>
              <span className="border border-[#8e8c8c] border-opacity-60 mx-2"></span>

              <a
                className=" hover:text-[#e7e0e0] transition-all duration-500"
                href=""
              >
                Terms of Services
              </a>
              <span className="border border-[#8e8c8c] border-opacity-60 mx-2"></span>

              <a
                className=" hover:text-[#e7e0e0] transition-all duration-500"
                href=""
              >
                Why India?
              </a>
              <span className="border border-[#8e8c8c] border-opacity-60 mx-2"></span>

              <a
                className=" hover:text-[#e7e0e0] transition-all duration-500"
                href=""
              >
                FAQ
              </a>
              <span className="border border-[#8e8c8c] border-opacity-60 mx-2"></span>

              <a
                className=" hover:text-[#e7e0e0] transition-all duration-500"
                href=""
              >
                Disclaimer
              </a>
              <span className="border border-[#8e8c8c] border-opacity-60 mx-2"></span>

              <a
                className=" hover:text-[#e7e0e0] transition-all duration-500"
                v
                href=""
              >
                GDPR
              </a>
            </ul>
          </div>
          <div className=" text-[14px] text-[#8e8c8c] flex flex-col md:items-start items-center gap-3">
            <div className=" flex items-center justify-start ">
              <div className=" flex items-center justify-start gap-4">
                <div className=" flex items-center justify-start">
                  <IoMdStar style={{ color: "#fcb900", fontSize: 20 }} />
                  <IoMdStar style={{ color: "#fcb900", fontSize: 20 }} />
                  <IoMdStar style={{ color: "#fcb900", fontSize: 20 }} />
                  <IoMdStar style={{ color: "#fcb900", fontSize: 20 }} />
                  <IoMdStar style={{ color: "#fcb900", fontSize: 20 }} />
                </div>
                <p>4.9 out of 5.0 by</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-start gap-4">
              <button className=" transition-all duration-500 hover:border-opacity-70 hover:text-opacity-70 text-[#fcb900] border border-[#fcb900] py-1 px-3 rounded-md">
                Rate Us
              </button>
              <p>1218 clients on over 10800+ projects</p>
            </div>
          </div>
          <div className=" ">
            <div className=" flex flex-col gap-3 md:items-start items-center justify-center">
              <Image
                src="/footerimg.webp"
                width="1500"
                height="1500"
                className="w-20 h-20 "
                alt=""
              />
              <div className=" flex gap-2 items-center justify-start">
                <a href="">
                  <FaFacebook className=" text-[#fff] text-[31px] hover:text-[#505050]" />
                </a>
                <a href="">
                  <FaSquareInstagram className=" text-[#fff] text-[31px] hover:text-[#505050]" />
                </a>
                <a href="">
                  <FaLinkedin className=" text-[#fff] text-[31px] hover:text-[#505050]" />
                </a>
                <a href="">
                  <FaSquareXTwitter className=" text-[#fff] text-[31px] hover:text-[#505050]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
