import React from "react";
import Nav from "./navbar";
import TrustCompany from "./trustcompany";
import CtoService from "./ctoservice";
import AccordionItems from "../components/accordion";
import SoftwareStrategy from "./softwarestrategy";
import SoftwareProduct from "./softwareproduct";
import WhyChooses from "./whychoose";
import CompanyColaboration from "./companycolaboration";
import HiringModel from "./hiringmodel";
import GridLayout from "../components/gridlayout";
import FaqSection from "../components/faqsection";
import FormBooking from "../components/formbooking";
import Footer from "../components/footer";
import RelatedServices from "./relatedservices";

const LearnMore = () => {
  return (
    <main>
      <Nav />
      <TrustCompany />
      <CtoService />
      <AccordionItems />
      <SoftwareStrategy />
      <SoftwareProduct />
      <WhyChooses />
      <CompanyColaboration />
      <SoftwareStrategy />
      <HiringModel />
      <FaqSection />
      <GridLayout />
      <FormBooking />
      <RelatedServices />
      <Footer />
    </main>
  );
};

export default LearnMore;
