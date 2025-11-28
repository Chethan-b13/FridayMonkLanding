"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";

export default function CTAV2() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#F89938]/20 via-[#FFB366]/10 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#F89938] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <motion.div
            className="p-12 lg:p-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F89938]/10 via-transparent to-[#364550]/10" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center shadow-2xl shadow-[#F89938]/50">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                Ready to Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
                  Something Amazing?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              >
                Let's turn your vision into reality. Get in touch with our team and start your project today.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <MagneticButton className="group px-10 py-5 bg-gradient-to-r from-[#F89938] to-[#FFB366] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#F89938]/50 transition-all flex items-center gap-3">
                  <Link href="mailto:hello@fridaymonk.com" className="flex items-center gap-3">
                    Start Your Project
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </MagneticButton>

                <MagneticButton className="px-10 py-5 bg-white/5 text-white border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/10 hover:border-[#F89938]/50 transition-all backdrop-blur-sm">
                  <Link href="#services">View Services</Link>
                </MagneticButton>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Available Now</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <span>Response within 24 hours</span>
                <div className="w-px h-4 bg-white/20" />
                <span>Free Consultation</span>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#F89938]/20 to-transparent rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#364550]/20 to-transparent rounded-full blur-2xl"
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
