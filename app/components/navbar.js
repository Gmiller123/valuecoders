import React from "react";
import Image from "next/image";
import ButtonComponentNav from "./button1";

const Navbar = () => {
  return (
    <>
      <div className=" bg-[#05164d] lg:bg-[url('/img.jpg')] w-full h-[90vh]">
        <div class="absolute h-[90vh] inset-0 bg-black opacity-30"></div>

        <header className=" max-w-[1800px] mx-auto px-6 relative z-50">
          <nav className=" flex items-center justify-between py-6">
            <Image
              src="/nav-logo.svg"
              width="1500"
              height="1500"
              alt="nav-logo"
              className="h-auto lg:w-[250px] w-[150px]"
            />

            <div className=" flex items-center justify-center gap-10">
              <ul className=" text-white xl:flex gap-10 font-medium hidden">
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Solutions</a>
                </li>
                <li>
                  <a href="">Technologies</a>
                </li>
                <li>
                  <a href="">Case Studies</a>
                </li>
                <li>
                  <a href="">Company</a>
                </li>
              </ul>

              <div className=" md:block hidden">
                <ButtonComponentNav />
              </div>

              <div className=" xl:hidden block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </div>
            </div>
          </nav>
        </header>

        <div className=" max-w-[1400px] mx-auto px-6 text-white flex flex-col items-start justify-center h-[80%] gap-5 lg:gap-10  relative z-50">
          <Image
            src="/home-partner-logo.webp"
            width={1500}
            height={1500}
            alt="img-group"
            className="w-[650px]"
          />
          <h1 className=" xl:text-5xl lg:text-4xl md:text-3xl text-[28px]  text-[#FFAD00] font-bold text-center sm:text-left">
            Software Engineering, Consulting & Outsourcing
          </h1>
          <p className=" text-base sm:text-xl md:text-left text-center">
            We are an award-winning Indian software engineering company focused
            on providing outsourced software development and software
            engineering teams to our clients globally.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
