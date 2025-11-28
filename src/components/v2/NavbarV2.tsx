"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavbarV2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F89938] to-[#FFB366] z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/v2" className="flex items-center gap-2 group">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">FM</span>
              </motion.div>
              <span className="text-xl font-bold text-white group-hover:text-[#F89938] transition-colors">
                FridayMonk
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#F89938] transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F89938] group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#F89938] to-[#FFB366] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#F89938]/50 transition-all hover:scale-105"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-[#F89938] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2.5 bg-gradient-to-r from-[#F89938] to-[#FFB366] text-white rounded-full font-semibold text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
