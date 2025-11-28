"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function FooterV3() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@fridaymonk.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/v3" className="text-white font-bold text-2xl">
            FridayMonk
          </Link>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#F89938]/50 flex items-center justify-center text-gray-400 hover:text-[#F89938] transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FridayMonk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
