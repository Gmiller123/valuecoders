import React from "react";
import styles from "./button.module.css";

const ButtonComponentNav = () => {
  return (
    <div className="">
      <button
        className={` ${styles.btn} border border-white bg-white pl-6 pr-1 py-1 flex hover:border-[#FFAD00] items-center justify-between gap-4 font-semibold tracking-wide rounded-full`}
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-right bg-[#FFAD00] h-full w-10 rounded-full"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonComponentNav;
