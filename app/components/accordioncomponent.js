"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="orange"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform duration-500`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={(open === 1, alwaysOpen)}
        icon={<Icon id={1} open={open} />}
        className="border-b border-black border-opacity-15 mb-3 pb-3 lg:pb-5 lg:mb-5"
      >
        <AccordionHeader
          onClick={handleAlwaysOpen}
          className=" text-base lg:text-xl text-[#3f3f3f] border-none"
        >
          Software Product Engineering
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <Link
              href="/knowmore"
              className=" flex items-center justify-start gap-1 underline text-lg text-black mt-5 mb-4 group hover:text-[#FFAD00]  transition-all hover:-translate-y-2"
            >
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
                className=" hover:text-[#FFAD00]"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-none text-base lg:text-xl"
        >
          Dedicated Software Teams
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-none text-base lg:text-xl"
        >
          Application Development
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions2 2 2 with cutting-edge
              technology and best practices, we empower businesses to realize
              their digital aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="border-none text-base lg:text-xl"
        >
          QA & Testing
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        icon={<Icon id={5} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="border-none text-base lg:text-xl"
        >
          eCommerce
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 6}
        icon={<Icon id={6} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="border-none text-base lg:text-xl"
        >
          Data Engineering
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 7}
        icon={<Icon id={7} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="border-none text-base lg:text-xl"
        >
          Cloud Services
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 8}
        icon={<Icon id={8} open={open} />}
        className="border-b border-black border-opacity-15 pt-5 pb-3 lg:pb-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="border-none text-base lg:text-xl"
        >
          AI & ML
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid place-content-center lg:grid-cols-2 text-sm lg:text-base text-[#656565]">
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
              <li className=" mb-4">MVP Development</li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-lg text-black mt-5 mb-4">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}
