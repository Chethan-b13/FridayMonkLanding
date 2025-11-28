"use client";

import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTypescript, SiTailwindcss, SiDocker, SiAmazon, SiPostgresql, SiMongodb, SiGraphql, SiRedis } from "react-icons/si";
import InfiniteMarquee from "./InfiniteMarquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TechStackV3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const technologies = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiGraphql, name: "GraphQL" },
    { icon: SiRedis, name: "Redis" },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#F89938]/20 mb-6">
          <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
            Tech Stack
          </span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Technologies We Love
        </h2>
      </div>

      {/* First Marquee - Left to Right */}
      <motion.div style={{ x: x1 }}>
        <InfiniteMarquee speed={30} direction="left" className="mb-8">
          {technologies.slice(0, 6).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F89938]/50 transition-all group"
            >
              <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors grayscale group-hover:grayscale-0" />
              <span className="text-white font-semibold whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </InfiniteMarquee>
      </motion.div>

      {/* Second Marquee - Right to Left */}
      <motion.div style={{ x: x2 }}>
        <InfiniteMarquee speed={35} direction="right">
          {technologies.slice(6).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F89938]/50 transition-all group"
            >
              <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors grayscale group-hover:grayscale-0" />
              <span className="text-white font-semibold whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </InfiniteMarquee>
      </motion.div>
    </section>
  );
}
