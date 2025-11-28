"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-gradient-to-br from-[#F89938]/10 to-[#FFB366]/5 rounded-full blur-3xl opacity-60 animate-blob" />
        <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#364550]/5 to-[#5A6B75]/5 rounded-full blur-3xl opacity-60 animation-delay-2000 animate-blob" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F89938]/20 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F89938] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F89938]"></span>
            </span>
            <span className="text-sm font-semibold text-[#364550] tracking-wide uppercase text-[11px]">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-[#364550] leading-[1.1] mb-6 tracking-tight">
            We build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              digital excellence
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-[#5A6B75] mb-10 max-w-xl leading-relaxed">
            Transforming complex challenges into elegant, scalable software solutions. 
            We are the technical partner for ambitious brands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#contact"
              className="group px-8 py-4 bg-[#364550] text-white rounded-full font-semibold hover:bg-[#F89938] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white text-[#364550] border border-[#364550]/10 rounded-full font-semibold hover:border-[#F89938] hover:text-[#F89938] transition-all duration-300 flex items-center justify-center"
            >
              View Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
            {[
              { label: "On-time Delivery", icon: CheckCircle2 },
              { label: "Scalable Code", icon: TrendingUp },
              { label: "Enterprise Security", icon: Shield },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <item.icon className="w-5 h-5 text-[#F89938]/70 group-hover:text-[#F89938] transition-colors" />
                <span className="text-sm font-medium text-[#5A6B75] group-hover:text-[#364550] transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual - Abstract Glass Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Main Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
            
            {/* Card Content Mockup */}
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="px-3 py-1 rounded-full bg-[#364550]/5 border border-[#364550]/10 text-xs font-semibold text-[#364550]">
                  Growth +124%
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="h-24 rounded-2xl bg-gradient-to-r from-[#364550]/5 to-transparent" />
                <div className="h-8 w-3/4 rounded-lg bg-[#364550]/5" />
                <div className="h-8 w-1/2 rounded-lg bg-[#364550]/5" />
              </div>

              <div className="mt-auto">
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/60">
                    <div className="w-10 h-10 rounded-full bg-[#364550] flex items-center justify-center text-white font-bold text-xs">FM</div>
                    <div>
                      <div className="text-sm font-bold text-[#364550]">FridayMonk</div>
                      <div className="text-xs text-[#5A6B75]">Tech Partner</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-64 h-40 bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl z-10 p-4"
          >
             <div className="flex items-center gap-3 mb-3">
               <div className="w-3 h-3 rounded-full bg-red-400" />
               <div className="w-3 h-3 rounded-full bg-yellow-400" />
               <div className="w-3 h-3 rounded-full bg-green-400" />
             </div>
             <div className="space-y-2">
               <div className="h-2 w-full bg-white/50 rounded-full" />
               <div className="h-2 w-2/3 bg-white/50 rounded-full" />
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-10 w-56 h-56 bg-gradient-to-br from-[#364550] to-[#5A6B75] rounded-2xl shadow-2xl z-30 p-6 flex flex-col justify-between text-white"
          >
             <TrendingUp className="w-8 h-8 text-[#F89938]" />
             <div>
               <div className="text-3xl font-bold mb-1">98%</div>
               <div className="text-sm text-gray-300">Client Satisfaction</div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
