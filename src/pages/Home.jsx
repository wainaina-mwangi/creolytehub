import HeroSection from "../components/HeroSection/HeroSection";
import Banner from "../components/ManagementBanner/Banner";
import ServicesGrid from "../components/ServicesGrid/ServicesGrid";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import Pricing from "../components/PricingSection/Pricing";
import CtaSection from "../components/CtaSection/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Banner /> */}
      <ServicesGrid />
      <HowItWorks />
      <TestimonialSlider />
      <Pricing />
       <Banner />
      <CtaSection />
     
    </>
  );
}
