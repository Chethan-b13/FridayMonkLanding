"use client";

import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: "1" | "2" | "full";
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({ children, className = "", span = "1" }: BentoCardProps) {
  const spanClasses = {
    "1": "",
    "2": "md:col-span-2",
    "full": "md:col-span-2 lg:col-span-3",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F89938]/50 transition-all ${spanClasses[span]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
