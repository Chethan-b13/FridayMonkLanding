"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function FooterV2() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Support", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@fridaymonk.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] to-[#0a0f1a] border-t border-white/5">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#F89938] to-[#FFB366] flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-[#F89938]/50 transition-all z-10"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/v2" className="flex items-center gap-2 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">FM</span>
              </motion.div>
              <span className="text-2xl font-bold text-white group-hover:text-[#F89938] transition-colors">
                FridayMonk
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Transforming complex challenges into elegant, scalable software solutions.
              Your trusted technical partner.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#F89938]/50 flex items-center justify-center text-gray-400 hover:text-[#F89938] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#F89938] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FridayMonk. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F89938] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F89938] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F89938] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F89938]/50 to-transparent" />
    </footer>
  );
}
