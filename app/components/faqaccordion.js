"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

export function FaqAccordion() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={(open === 1, alwaysOpen)}
        icon={<Icon id={1} open={open} />}
        className="border-b border-black border-opacity-15"
      >
        <AccordionHeader
          onClick={handleAlwaysOpen}
          className=" text-base lg:text-xl text-[#3f3f3f] border-none tracking-wide"
        >
          Why should I choose ValueCoders for software engineering, consulting,
          and outsourcing?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5 lg:tracking-wider">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside text-sm lg:text-base text-[#656565] lg:tracking-wider">
              <li className=" mb-1 lg:mb-4">675+ software developers</li>
              <li className=" mb-1 lg:mb-4">
                Expertise in different technologies
              </li>
              <li className=" mb-1 lg:mb-4">
                Strong reputation for quality work
              </li>
              <li className=" mb-1 lg:mb-4">
                Experience working on complex projects for different industry
                verticals
              </li>
            </ul>

            <button className=" flex items-center justify-center gap-1 underline text-base lg:text-lg text-black mt-5 mb-4">
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
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-none text-base lg:text-xl"
        >
          Can I test the services of ValueCoders before committing to long-term
          engagement?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              You can test the services of ValueCoders before committing to
              long-term engagement. We offer free trial to clients worldwide.
              This is to give our potential customers a risk-free way to try our
              software development services before committing to long-term
              engagement. We strongly believe in our products and services and
              want to allow everyone to experience firsthand the value we can
              bring.
            </p>
            <p className="text-sm lg:text-basebase">
              Just fill out a form and connect with our team immediately. We
              hope you’ll take advantage of this and give us a chance to show
              you what we can do.
            </p>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-none text-base lg:text-xl"
        >
          How much does outsourcing software development to India cost?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              The cost of
              <span className=" text-black px-1">
                outsourcing software development
              </span>
              depends on several factors such as the size and build of the
              application, the features & third-party integrations, APIs,
              animations, localizations, backend, cross-platform toolsets,
              platforms, etc. If you share your basic idea, we can provide you
              with an ETA and estimated cost.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="border-none  text-base lg:text-xl"
        >
          I own a digital agency. Do you offer white-label software development
          services?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid grid-cols-2 text-sm lg:text-base text-[#656565]">
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
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="border-none  text-base lg:text-xl"
        >
          Do you work with startups and clients on a budget?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid grid-cols-2 text-sm lg:text-base text-[#656565]">
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
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="border-none  text-base lg:text-xl"
        >
          Is outsourcing software development risky? How do you ensure IP
          (Intellectual Property) and data protection?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid grid-cols-2 text-sm lg:text-base text-[#656565]">
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
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="border-none  text-base lg:text-xl"
        >
          I want to outsource software development. What engagement options do
          you offer?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid grid-cols-2 text-sm lg:text-base text-[#656565]">
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
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="border-none  text-base lg:text-xl"
        >
          How does the software development outsourcing process work?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid grid-cols-2 text-sm lg:text-base text-[#656565]">
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
        open={open === 9}
        icon={<Icon id={9} open={open} />}
        className="border-b border-black border-opacity-15 pt-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className="border-none  text-base lg:text-xl"
          s
        >
          What are the advantages of outsourcing software development to India
          over Latin America, the Philippines or Eastern Europe?
        </AccordionHeader>
        <AccordionBody className="pt-0">
          <div>
            <p className=" text-sm lg:text-base mb-5">
              Crafting bespoke software solutions with cutting-edge technology
              and best practices, we empower businesses to realize their digital
              aspirations and foster growth.
            </p>
            <ul className=" list-image-[url('/acr-list.svg')] list-inside grid grid-cols-2 text-sm lg:text-base text-[#656565]">
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
