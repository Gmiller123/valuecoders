import AccordionItems from "./components/accordion";
import Awardsandcertification from "./components/awardsandcertification";
import CompanyShowCase from "./components/companyshowcase";
import Experience from "./components/experience";
import GetStarted from "./components/getstarted";
import GridLayout from "./components/gridlayout";
import Hero from "./components/hero";
import CardSolution from "./components/cardsolution";
import TechStack from "./components/techstack";
import Solution from "./components/solution";
import FaqSection from "./components/faqsection";
import FormBooking from "./components/formbooking";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SliderTestimonials from "./components/slider";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <CompanyShowCase />
      <AccordionItems />
      <GetStarted />
      <Solution />
      <Awardsandcertification />
      <Experience />
      <TechStack />
      <GetStarted />
      <CardSolution />
      <FaqSection />
      <GridLayout />
      <SliderTestimonials />
      <FormBooking />
      <Footer />
    </main>
  );
}
