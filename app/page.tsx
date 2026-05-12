import Image from "next/image";
import Header from "./layout/header";
import Footer from "./layout/footer";
import RegisterSection from "./section/register-section";
import HeroSection from "./section/hero-section";
import BenefitSection from "./section/benefit-section";
import ServicesSection from "./section/service-section";
import PricingSection from "./section/pricing-section";
import WhyChooseUsSection from "./section/about-section";
import BeforeAfterSection from "./section/before-after-section";
import ValueSection from "./section/value-section";
import ProcessSection from "./section/process-section";
import TestimonialSection from "./section/testimonial-section";
import FaqSection from "./section/faq-section";
import VideoSection from "./section/video-section";
import ExpertAuthSection from "./section/expert-auth-section";
import ProblemSection from "./section/problem-section";
import AboutSection from "./section/about-section";

export default function Home() {
  return (
   <div>
    <Header/>
    <main>
      <HeroSection/>
      <ProblemSection/>
            <ServicesSection/>

      {/* <BenefitSection/> */}
            <AboutSection/>
                  <PricingSection/>

      <ExpertAuthSection/>

      <BeforeAfterSection/>
            {/* <TestimonialSection/> */}

      <ProcessSection/>
      
      <VideoSection/>
      <FaqSection/>
      <RegisterSection/>
    </main>
    <Footer/>
   </div>
  );
}
