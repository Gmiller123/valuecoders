import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadCrumbs() {
  return (
    <Breadcrumbs className=" text-xs lg:text-[13px]">
      <BreadcrumbItem className=" text-[#bababa] hover:text-white  transition-all duration-300">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem className=" text-[#bababa] hover:text-white  transition-all duration-300s">
        Service
      </BreadcrumbItem>
      <BreadcrumbItem>Software Product Development</BreadcrumbItem>
    </Breadcrumbs>
  );
}
