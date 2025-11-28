"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

export default function HeroV2() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "digital excellence";
  
  useEffect(() => {
    setMounted(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0a0f1a] via-[#0f172a] to-[#1e293b]">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-gradient-to-br from-[#F89938]/20 to-[#FFB366]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[30%] -left-[10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#364550]/20 to-[#5A6B75]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#F89938]/30 backdrop-blur-sm mb-8 hover:bg-white/10 transition-all cursor-default group"
          >
            <motion.span
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="w-4 h-4 text-[#F89938]" />
            </motion.span>
            <span className="text-sm font-semibold text-gray-300 tracking-wide uppercase text-[11px]">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            We build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] via-[#FFB366] to-[#F89938] animate-gradient">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-1 h-16 bg-[#F89938] ml-1"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Transforming complex challenges into elegant, scalable software solutions.
            We are the technical partner for ambitious brands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-[#F89938] to-[#FFB366] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#F89938]/50 transition-all flex items-center justify-center gap-2">
              <Link href="#contact" className="flex items-center gap-2">
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 hover:border-[#F89938]/50 transition-all flex items-center justify-center backdrop-blur-sm">
              <Link href="#services">View Services</Link>
            </MagneticButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10"
          >
            {[
              { label: "On-time Delivery", icon: Shield },
              { label: "Scalable Code", icon: TrendingUp },
              { label: "Fast Performance", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 group cursor-default"
              >
                <item.icon className="w-5 h-5 text-[#F89938]/70 group-hover:text-[#F89938] transition-colors" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual - Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Main Card */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            {/* Card Content */}
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-xs font-semibold text-green-400">
                  Growth +124%
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <motion.div
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-24 rounded-2xl bg-gradient-to-r from-[#F89938]/20 to-transparent"
                />
                <div className="h-8 w-3/4 rounded-lg bg-white/5" />
                <div className="h-8 w-1/2 rounded-lg bg-white/5" />
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#364550] to-[#5A6B75] flex items-center justify-center text-white font-bold text-xs">
                    FM
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">FridayMonk</div>
                    <div className="text-xs text-gray-400">Tech Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Stats Card */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 left-10 w-56 h-56 bg-gradient-to-br from-[#364550] to-[#5A6B75] rounded-2xl shadow-2xl z-30 p-6 flex flex-col justify-between text-white border border-white/10"
          >
            <TrendingUp className="w-8 h-8 text-[#F89938]" />
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-4xl font-bold mb-1"
              >
                98%
              </motion.div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </motion.div>

          {/* Code Window */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-64 h-40 bg-[#1e293b]/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl z-10 p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex gap-2">
                <span className="text-purple-400">const</span>
                <span className="text-blue-400">solution</span>
                <span className="text-gray-400">=</span>
              </div>
              <div className="pl-4 text-green-400">"innovative"</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
