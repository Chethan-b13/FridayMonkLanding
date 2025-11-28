"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Zap, Users, Award, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Expert Team",
    desc: "Senior developers with 10+ years of experience across industries",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Agile methodology ensures quick turnarounds without compromising quality",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Rigorous testing and code review processes for production-ready code",
  },
  {
    icon: Users,
    title: "Full Support",
    desc: "Dedicated support from development through deployment and beyond",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, user needs, and technical requirements to build a solid foundation.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    desc: "We create a comprehensive roadmap and intuitive designs that align with your brand vision.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Our expert team builds your solution using cutting-edge technologies and best practices.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "We deploy your product and provide ongoing support to ensure smooth scaling and growth.",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why" ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#F89938] font-semibold tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#364550] mb-6">
            Partner with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-[#5A6B75] max-w-3xl mx-auto font-medium leading-relaxed">
            We're not just developers, we're your growth partners committed to
            your success through technical innovation.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F89938]/10 flex items-center justify-center mb-6 group-hover:bg-[#F89938] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#F89938] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#364550] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#5A6B75] text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="relative">
          <div className="text-center mb-16">
             <h3 className="text-3xl font-bold text-[#364550]">Our Process</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[#F89938]/20 via-[#F89938] to-[#F89938]/20" />

            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="relative pt-8 md:pt-0"
              >
                <div className="md:absolute md:-top-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#F89938] flex items-center justify-center z-10 shadow-lg mb-6 md:mb-0 mx-auto">
                  <span className="text-[#F89938] font-bold text-sm">{item.step}</span>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 md:mt-12 h-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <h4 className="text-xl font-bold text-[#364550] mb-3 text-center md:text-left">
                    {item.title}
                  </h4>
                  <p className="text-[#5A6B75] text-sm leading-relaxed text-center md:text-left">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
