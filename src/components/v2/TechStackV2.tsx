"use client";

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTypescript, SiTailwindcss, SiDocker, SiAmazon } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";

export default function TechStackV2() {
  const technologies = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiAmazon, name: "AWS", color: "#FF9900" },
  ];

  return (
    <section id="tech-stack" className="relative py-32 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(248, 153, 56, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 153, 56, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#F89938]/10 border border-[#F89938]/20 mb-6"
          >
            <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
              Technology Stack
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              Modern Tech
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust, scalable solutions
          </p>
        </ScrollReveal>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <motion.div
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F89938]/50 transition-all flex flex-col items-center justify-center gap-4 h-40"
                  whileHover={{
                    boxShadow: `0 20px 60px -15px ${tech.color}40`,
                  }}
                >
                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <tech.icon
                      className="w-16 h-16 transition-all"
                      style={{ color: tech.color }}
                    />
                  </motion.div>

                  {/* Name */}
                  <span className="text-white font-semibold text-sm group-hover:text-[#F89938] transition-colors">
                    {tech.name}
                  </span>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.color}10, transparent 70%)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <motion.div
            className="mt-16 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-400 text-lg mb-4">
              And many more technologies to fit your needs
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["GraphQL", "PostgreSQL", "MongoDB", "Redis", "Kubernetes"].map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm hover:border-[#F89938]/50 hover:text-[#F89938] transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
