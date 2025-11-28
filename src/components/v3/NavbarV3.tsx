"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavbarV3() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Work", href: "#showcase" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/v3" className="text-white font-bold text-lg">
            FM
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F89938] group-hover:w-full transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:block px-4 py-2 bg-[#F89938] text-white text-sm rounded-full hover:bg-[#FFB366] transition-colors"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[#F89938] text-white text-sm rounded-full text-center"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
