"use client";

import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 50,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* Render children twice for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
