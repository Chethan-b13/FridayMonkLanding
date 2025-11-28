"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Smartphone, Cloud, Palette, Database, Rocket } from "lucide-react";
import { useState, useRef } from "react";

export default function ServicesV3() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      short: "Modern web apps",
      description: "Custom web applications built with cutting-edge frameworks, optimized for performance and scalability.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      short: "iOS & Android",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      short: "Scalable infrastructure",
      description: "Cloud-native architectures and deployment strategies for modern applications.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      short: "Beautiful interfaces",
      description: "Intuitive, user-centered designs that combine aesthetics with functionality.",
    },
    {
      icon: Database,
      title: "Backend Systems",
      short: "Robust APIs",
      description: "Scalable backend architectures with secure APIs and efficient data management.",
    },
    {
      icon: Rocket,
      title: "DevOps",
      short: "CI/CD pipelines",
      description: "Automated deployment workflows and infrastructure as code for rapid delivery.",
    },
  ];

  return (
    <section ref={containerRef} id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#F89938]/20 mb-6">
            <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            End-to-end solutions for your digital needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          style={{ y }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F89938]/50 transition-all overflow-hidden cursor-pointer"
            >
              {/* Spotlight Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "radial-gradient(circle at center, rgba(248, 153, 56, 0.1), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center mb-6"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F89938] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description - Always Visible */}
                <p className="text-gray-400 mb-4">{service.short}</p>

                {/* Full Description - Revealed on Hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
