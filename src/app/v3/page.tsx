import NavbarV3 from "@/components/v3/NavbarV3";
import HeroV3 from "@/components/v3/HeroV3";
import ServicesV3 from "@/components/v3/ServicesV3";
import TechStackV3 from "@/components/v3/TechStackV3";
import ProcessV3 from "@/components/v3/ProcessV3";
import ShowcaseV3 from "@/components/v3/ShowcaseV3";
import CTAV3 from "@/components/v3/CTAV3";
import FooterV3 from "@/components/v3/FooterV3";
import SpotlightCursor from "@/components/v3/SpotlightCursor";
import StarBackground from "@/components/v3/StarBackground";

export default function V3Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white selection:bg-[#F89938]/30">
      <StarBackground />
      <SpotlightCursor />
      
      <div className="relative z-10">
        <NavbarV3 />
        <HeroV3 />
        <ServicesV3 />
        <TechStackV3 />
        <ProcessV3 />
        <ShowcaseV3 />
        <CTAV3 />
        <FooterV3 />
      </div>
    </div>
  );
}
