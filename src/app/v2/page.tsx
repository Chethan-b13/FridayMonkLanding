import NavbarV2 from "@/components/v2/NavbarV2";
import HeroV2 from "@/components/v2/HeroV2";
import ServicesV2 from "@/components/v2/ServicesV2";
import TechStackV2 from "@/components/v2/TechStackV2";
import WhyChooseUsV2 from "@/components/v2/WhyChooseUsV2";
import TestimonialsV2 from "@/components/v2/TestimonialsV2";
import CTAV2 from "@/components/v2/CTAV2";
import FooterV2 from "@/components/v2/FooterV2";

export default function V2Page() {
  return (
    <div className="bg-[#0a0f1a] overflow-x-hidden">
      <NavbarV2 />
      <HeroV2 />
      <ServicesV2 />
      <TechStackV2 />
      <WhyChooseUsV2 />
      <TestimonialsV2 />
      <CTAV2 />
      <FooterV2 />
    </div>
  );
}
