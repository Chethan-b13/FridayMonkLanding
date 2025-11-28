"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Code2, Smartphone, Cloud, Lock, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Launch your idea in weeks, not months. We build scalable MVPs that validate your market.",
    tags: ["Strategy", "Design", "Development"],
  },
  {
    icon: Code2,
    title: "Web Applications",
    desc: "Robust, high-performance web apps built with modern technologies like Next.js and React.",
    tags: ["Full Stack", "SaaS", "Enterprise"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-quality cross-platform mobile applications for iOS and Android using React Native.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud architecture on AWS/GCP to ensure your product grows with you.",
    tags: ["DevOps", "AWS", "Scaling"],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    desc: "Enterprise-grade security implementation and compliance readiness (SOC2, HIPAA).",
    tags: ["Security", "Audits", "Compliance"],
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Augment your team with our senior engineers who integrate seamlessly into your workflow.",
    tags: ["Staff Augmentation", "Vetted Talent"],
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F89938]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[#F89938] font-semibold tracking-wider uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-[#364550]"
          >
            Comprehensive Tech Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-[#5A6B75] max-w-2xl mx-auto"
          >
            We deliver end-to-end software development services tailored to your business goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F89938]/20 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#364550]/5 flex items-center justify-center mb-6 group-hover:bg-[#F89938] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#364550] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-[#364550] mb-3 group-hover:text-[#F89938] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#5A6B75] mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-[#5A6B75] group-hover:bg-[#F89938]/10 group-hover:text-[#F89938] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                   <ArrowRight className="w-5 h-5 text-[#F89938]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
