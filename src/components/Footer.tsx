"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#F89938] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FM</span>
              </div>
              <span className="font-bold text-xl text-[#364550]">
                FridayMonk
              </span>
            </div>
            <p className="text-[#5A6B75] text-lg max-w-sm mb-8 leading-relaxed">
              Building the future of digital products with precision, passion, and technical excellence.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#5A6B75] hover:bg-[#F89938] hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-[#364550] mb-6">Company</h4>
            <ul className="space-y-4">
              {["About", "Services", "Work", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#5A6B75] hover:text-[#F89938] transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#364550] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@fridaymonk.com"
                  className="text-[#5A6B75] hover:text-[#F89938] transition-colors"
                >
                  hello@fridaymonk.com
                </a>
              </li>
              <li className="text-[#5A6B75]">
                +1 (555) 123-4567
              </li>
              <li className="text-[#5A6B75]">
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#94a3b8]">
            © {currentYear} FridayMonk. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#94a3b8]">
            <Link href="#" className="hover:text-[#364550] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#364550] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
