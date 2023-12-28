import React from "react";
import Image from "next/image";

const GridLayout = () => {
  return (
    <>
      <div className=" grid xl:grid-cols-4 h-full">
        <div className=" col-span-2 flex">
          <div className=" flex-1 overflow-hidden xl:block hidden">
            <Image
              src="/grid-img.webp"
              width="1500"
              height="1500"
              alt="grid-image"
              className=" h-full object-cover w-full transition-transform transform-gpu hover:scale-125 duration-500"
            />
          </div>
          <div className=" bg-[#05164d] text-white flex-1 h-full flex flex-col items-start justify-between p-[30px]">
            <a
              href=""
              className="border border-white border-opacity-40 rounded-md px-2 lg:px-3 py-1 lg:py-2 mb-4 lg:text-base text-sm"
            >
              Blog
            </a>
            <h1 className=" text-base lg:text-xl">
              Cracking the Code: Overcoming Challenges in Outsourcing to India
            </h1>
            <p className=" text-[#9b9b9b] text-sm lg:text-base py-2.5 ">
              Outsourcing to India has been a popular business strategy for
              years, offering companies the
            </p>
            <button className=" text-sm lg:text-base flex items-center justify-center gap-2 lg:gap-2.5 mt-4 lg:mt-6">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-circle"
                className=" size-5 lg:size-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" col-span-2 flex h-full w-full bg-[url('/gridimg2.webp')] bg-no-repeat bg-cover">
          <div className=" text-white flex-1 h-full flex flex-col items-start justify-between p-[30px] max-w-[90%]">
            <a
              href=""
              className="border border-white border-opacity-40 rounded-md px-2 lg:px-3 py-1 lg:py-2 mb-4 lg:text-base text-sm"
            >
              Blog
            </a>
            <h1 className=" text-base lg:text-xl">Elearning Application</h1>
            <p className=" text-[#9b9b9b] text-sm lg:text-base py-2.5 ">
              The smart integrated platform is founded on the pillars of
              providing application access to parents so that they can also see
              their children&apos;s accomplishments.
            </p>
            <div className=" flex items-center justify-center gap-16">
              <p className=" text-[#ffffff] lg:text-base text-sm">Core tech</p>
              <p className=" text-[#8b8b8b]">c#, Swift</p>
            </div>

            <button className=" flex items-center lg:text-base text-sm justify-center gap-2 lg:gap-2.5 mt-6">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-circle"
                className=" size-5 lg:size-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" col-span-2 flex h-full w-full bg-[url('/gridimg2.webp')] bg-no-repeat bg-cover">
          <div className=" text-white flex-1 h-full flex flex-col items-start justify-between p-[30px] max-w-[90%]">
            <a
              href=""
              className="border border-white border-opacity-40 rounded-md px-2 lg:px-3 py-1 lg:py-2 mb-4 lg:text-base text-sm"
            >
              Blog
            </a>
            <h1 className=" text-base lg:text-xl">Elearning Application</h1>
            <p className=" text-[#9b9b9b] text-sm lg:text-base py-2.5 ">
              The smart integrated platform is founded on the pillars of
              providing application access to parents so that they can also see
              their children&apos;s accomplishments.
            </p>
            <div className=" flex items-center justify-center gap-16">
              <p className=" text-[#ffffff] lg:text-base text-sm">Core tech</p>
              <p className=" text-[#8b8b8b]">c#, Swift</p>
            </div>

            <button className=" flex items-center lg:text-base text-sm justify-center gap-2 lg:gap-2.5 mt-6">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-circle"
                className=" size-5 lg:size-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" col-span-2 flex">
          <div className=" flex-1 overflow-hidden xl:block hidden">
            <Image
              src="/grid-img.webp"
              width="1500"
              height="1500"
              alt="grid-image"
              className=" h-full object-cover w-full transition-transform transform-gpu hover:scale-125 duration-500"
            />
          </div>
          <div className=" bg-[#05164d] text-white flex-1 h-full flex flex-col items-start justify-between p-[30px]">
            <a
              href=""
              className="border border-white border-opacity-40 rounded-md px-2 lg:px-3 py-1 lg:py-2 mb-4 lg:text-base text-sm"
            >
              Blog
            </a>
            <h1 className=" text-base lg:text-xl">
              Cracking the Code: Overcoming Challenges in Outsourcing to India
            </h1>
            <p className=" text-[#9b9b9b] text-sm lg:text-base py-2.5 ">
              Outsourcing to India has been a popular business strategy for
              years, offering companies the
            </p>
            <button className=" text-sm lg:text-base flex items-center justify-center gap-2 lg:gap-2.5 mt-4 lg:mt-6">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-circle"
                className=" size-5 lg:size-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" col-span-2 flex">
          <div className=" flex-1 overflow-hidden xl:block hidden">
            <Image
              src="/grid-img.webp"
              width="1500"
              height="1500"
              alt="grid-image"
              className=" h-full object-cover w-full transition-transform transform-gpu hover:scale-125 duration-500"
            />
          </div>
          <div className=" bg-[#05164d] text-white flex-1 h-full flex flex-col items-start justify-between p-[30px]">
            <a
              href=""
              className="border border-white border-opacity-40 rounded-md px-2 lg:px-3 py-1 lg:py-2 mb-4 lg:text-base text-sm"
            >
              Blog
            </a>
            <h1 className=" text-base lg:text-xl">
              Cracking the Code: Overcoming Challenges in Outsourcing to India
            </h1>
            <p className=" text-[#9b9b9b] text-sm lg:text-base py-2.5 ">
              Outsourcing to India has been a popular business strategy for
              years, offering companies the
            </p>
            <button className=" text-sm lg:text-base flex items-center justify-center gap-2 lg:gap-2.5 mt-4 lg:mt-6">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-circle"
                className=" size-5 lg:size-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" col-span-2 flex h-full w-full bg-[url('/gridimg2.webp')] bg-no-repeat bg-cover">
          <div className=" text-white flex-1 h-full flex flex-col items-start justify-between p-[30px] max-w-[90%]">
            <a
              href=""
              className="border border-white border-opacity-40 rounded-md px-2 lg:px-3 py-1 lg:py-2 mb-4 lg:text-base text-sm"
            >
              Blog
            </a>
            <h1 className=" text-base lg:text-xl">Elearning Application</h1>
            <p className=" text-[#9b9b9b] text-sm lg:text-base py-2.5 ">
              The smart integrated platform is founded on the pillars of
              providing application access to parents so that they can also see
              their children&apos;s accomplishments.
            </p>
            <div className=" flex items-center justify-center gap-16">
              <p className=" text-[#ffffff] lg:text-base text-sm">Core tech</p>
              <p className=" text-[#8b8b8b]">c#, Swift</p>
            </div>

            <button className=" flex items-center lg:text-base text-sm justify-center gap-2 lg:gap-2.5 mt-6">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-circle"
                className=" size-5 lg:size-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
