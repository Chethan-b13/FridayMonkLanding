"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LiquidMorph from "./LiquidMorph";
import { useRef } from "react";

export default function CTAV3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#F89938]/20 mb-6">
              <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
                Let's Connect
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
                something great?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-xl">
              Let's discuss your project and turn your vision into reality. Get in touch with us today.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:hello@fridaymonk.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#F89938] text-white rounded-full font-bold text-lg hover:bg-[#FFB366] transition-colors group shadow-lg shadow-[#F89938]/30"
              >
                Start a Conversation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Contact Info */}
            <div className="mt-12 space-y-3">
              <div className="text-gray-400">
                <span className="text-white font-semibold">Email:</span> hello@fridaymonk.com
              </div>
              <div className="text-gray-400">
                <span className="text-white font-semibold">Response time:</span> Within 24 hours
              </div>
            </div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden"
          >
            <LiquidMorph />
            
            {/* Floating Stats */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-sm text-gray-300">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-sm text-gray-300">Satisfaction</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm text-gray-300">Team</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-sm text-gray-300">Years</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
