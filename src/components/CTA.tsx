"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#364550] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F89938]/10 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5A6B75]/20 rounded-full blur-3xl opacity-30 animation-delay-2000 animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F89938]/10 border border-[#F89938]/20 mb-8">
              <Zap className="w-4 h-4 text-[#F89938]" />
              <span className="text-sm font-semibold text-[#F89938] uppercase tracking-wider">Start Your Journey</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
                something great?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Join the forward-thinking companies that trust FridayMonk to deliver exceptional digital products.
            </p>

            <div className="space-y-4">
              {[
                "Free 30-minute technical consultation",
                "Detailed project roadmap & estimation",
                "No commitment required",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F89938]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#F89938]" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#364550] mb-2">Message Sent!</h3>
                <p className="text-[#5A6B75]">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#364550] mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#364550] focus:outline-none focus:border-[#F89938] focus:ring-2 focus:ring-[#F89938]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#364550] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#364550] focus:outline-none focus:border-[#F89938] focus:ring-2 focus:ring-[#F89938]/20 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#364550] mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#364550] focus:outline-none focus:border-[#F89938] focus:ring-2 focus:ring-[#F89938]/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#364550] text-white font-bold rounded-xl hover:bg-[#F89938] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Get Your Free Proposal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
