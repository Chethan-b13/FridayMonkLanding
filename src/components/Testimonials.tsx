"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, Zap, Server, TrendingDown, Users } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "PayFlow",
    content:
      "We shipped our MVP in 8 weeks instead of 6 months. FridayMonk didn't just code—they understood our business and made smart architectural decisions.",
    rating: 5,
    image: "SC",
    color: "bg-blue-500",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "ShopScale",
    content:
      "The infrastructure they built handles 10M+ requests daily without breaking a sweat. Best investment we've ever made on tech.",
    rating: 5,
    image: "MR",
    color: "bg-emerald-500",
  },
  {
    name: "Jessica Wu",
    role: "Product Lead",
    company: "DataMind",
    content:
      "Not just execution, but partnership. They became an extension of our team. After 2 years, we trust them with our most critical projects.",
    rating: 5,
    image: "JW",
    color: "bg-purple-500",
  },
];

const caseMetrics = [
  {
    icon: Zap,
    label: "Avg Time to Launch",
    value: "8 weeks",
    vs: "vs 24 weeks industry avg",
  },
  { 
    icon: Server,
    label: "System Uptime", 
    value: "99.99%", 
    vs: "guaranteed SLA" 
  },
  { 
    icon: TrendingDown,
    label: "Cost Efficiency", 
    value: "40%", 
    vs: "reduction in dev costs" 
  },
  { 
    icon: Users,
    label: "Client Retention", 
    value: "96%", 
    vs: "long-term partnerships" 
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-20 pb-32 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Metrics Row - Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {caseMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="relative group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-16 h-16 text-[#F89938]" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#F89938]/10 flex items-center justify-center mb-4 group-hover:bg-[#F89938] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#F89938] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-black text-[#364550] mb-1 tracking-tight group-hover:text-[#F89938] transition-colors">
                    {metric.value}
                  </p>
                  <p className="font-bold text-[#364550] mb-2 text-sm uppercase tracking-wide">{metric.label}</p>
                  <p className="text-xs text-[#5A6B75] font-medium bg-gray-50 inline-block px-2 py-1 rounded-md">{metric.vs}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Header */}
        <div className="text-center mb-16">
           <span className="text-[#F89938] font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#364550]">
            Trusted by Visionaries
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-100 group-hover:text-[#F89938]/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#F89938] text-[#F89938]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#364550] mb-8 text-lg leading-relaxed font-medium">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#364550]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#5A6B75]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Wall */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-16 border-t border-gray-200 text-center"
        >
          <p className="text-[#5A6B75] font-medium mb-8 text-sm uppercase tracking-widest">
            Powering next-gen companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Stripe", "Vercel", "Figma", "Notion", "Linear", "OpenAI"].map(
              (company) => (
                <span key={company} className="text-xl md:text-2xl font-bold text-[#364550] hover:text-[#F89938] transition-colors cursor-default">
                  {company}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
