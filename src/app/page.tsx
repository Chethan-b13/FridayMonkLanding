import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function V2Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <TechStack />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}
