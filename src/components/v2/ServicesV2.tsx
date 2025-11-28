"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Database, Palette, Rocket } from "lucide-react";
import Card3D from "./Card3D";
import ScrollReveal from "./ScrollReveal";

export default function ServicesV2() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Robust APIs and database architectures for enterprise needs.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Rocket,
      title: "DevOps",
      description: "Automated CI/CD pipelines and infrastructure as code.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#0a0f1a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#F89938]/5 rounded-full blur-3xl"
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
              Our Services
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              Deliver
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions tailored to your business needs
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card3D className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F89938]/50 transition-all group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#F89938]/20 transition-all`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F89938] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F89938]/0 to-[#F89938]/0 group-hover:from-[#F89938]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </motion.div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
