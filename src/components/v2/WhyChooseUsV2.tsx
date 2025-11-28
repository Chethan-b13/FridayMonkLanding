"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, Clock } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUsV2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered", icon: Target },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: Users },
    { value: 50, suffix: "+", label: "Team Members", icon: Award },
    { value: 5, suffix: " Years", label: "Experience", icon: Clock },
  ];

  const features = [
    {
      title: "Agile Methodology",
      description: "Fast iterations and continuous delivery for rapid time-to-market",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business from MVP to enterprise",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and compliance standards",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="why-us" className="relative py-32 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-[#F89938]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-[#364550]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#F89938]/10 border border-[#F89938]/20 mb-6"
          >
            <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              Success
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine technical excellence with business understanding
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F89938]/50 transition-all text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 10 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F89938]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex-shrink-0`}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F89938] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
