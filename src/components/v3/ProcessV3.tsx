"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Pencil, Code, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export default function ProcessV3() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Discovery",
      description: "We dive deep into your vision, goals, and challenges to understand what success looks like.",
    },
    {
      number: "02",
      icon: Pencil,
      title: "Design",
      description: "Crafting intuitive user experiences and beautiful interfaces that align with your brand.",
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      description: "Building robust, scalable solutions with clean code and best practices.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      description: "Deploying your product and ensuring a smooth transition to production.",
    },
  ];

  return (
    <section ref={containerRef} id="process" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          style={{ y }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#F89938]/20 mb-6">
            <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            A proven methodology for delivering exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#F89938] to-transparent origin-top"
          />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-8 items-start"
              >
                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="relative z-10 flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center shadow-lg shadow-[#F89938]/30">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 rounded-full bg-[#F89938]/30 -z-10 blur-md"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F89938]/30 transition-all">
                  <div className="text-sm text-[#F89938] font-bold mb-2">{step.number}</div>
                  <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
