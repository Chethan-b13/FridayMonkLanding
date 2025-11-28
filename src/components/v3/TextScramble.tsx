"use client";

import { useEffect, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TextScramble({ text, className = "", speed = 50 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayText}</span>;
}
