"use client";

import React from "react";
import Image from "next/image";
import ButtonComponentNav from "../components/button1";
import { RiArrowDropDownLine } from "react-icons/ri";
import BreadCrumbs from "./breadcrumb";
import ButtonLearnMore from "./buttons";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div className=" bg-[#05164d] lg:bg-[url('/learnmore-hero-img.webp')] bg-cover h-[700px] bg-no-repeat w-full">
        <div class="absolute h-[700px] inset-0 bg-black opacity-65"></div>
        <header className=" max-w-[1800px] mx-auto px-6 relative z-50">
          <nav className=" flex items-center justify-between py-6">
            <div className=" flex items-center justify-center">
              <Link href="/">
                <Image
                  src="/nav-logo.svg"
                  width="1500"
                  height="1500"
                  alt="nav-logo"
                  className="h-auto lg:w-[250px] w-[150px] border-r border-white pr-2"
                />
              </Link>
              <a
                className=" pl-2 text-white md:flex hidden items-center justify-center"
                href=""
              >
                Product Engineering
                <RiArrowDropDownLine className="w-10 h-10" />
              </a>
            </div>

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
              <div className=" lg:block hidden">
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

        <div className=" pt-10 relative z-50 max-w-[1400px] mx-auto px-6 text-white mt-5 lg:mt-10 h-[80%]">
          <BreadCrumbs />
          <h1 className="mt-10 text-[26px] lg:text-[32px] mb-5 text-[#FFAD00] font-bold text-left">
            Software Product Development Services
          </h1>
          <p className=" lg:text-lg text-sm text-left leading-[24px]">
            With over a decade of experience in the IT industry, ValueCoders
            specializes in comprehensive outsourced product development
            services. We ensure unmatched quality, from identifying unique
            selling propositions (USPs) to designing and delivering
            user-friendly software products.
          </p>
          <ButtonLearnMore />
        </div>
      </div>
    </div>
  );
};

export default Nav;
