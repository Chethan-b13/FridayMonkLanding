"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ExternalLink } from "lucide-react";

export default function ShowcaseV3() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filters = ["All", "Web", "Mobile", "Design"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web",
      image: "🛍️",
      description: "Modern shopping experience",
    },
    {
      title: "Fitness Tracker",
      category: "Mobile",
      image: "💪",
      description: "Health & wellness app",
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "🎨",
      description: "Complete visual system",
    },
    {
      title: "SaaS Dashboard",
      category: "Web",
      image: "📊",
      description: "Analytics platform",
    },
    {
      title: "Food Delivery",
      category: "Mobile",
      image: "🍕",
      description: "On-demand service",
    },
    {
      title: "Portfolio Site",
      category: "Design",
      image: "✨",
      description: "Creative showcase",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={containerRef} id="showcase" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#F89938]/20 mb-6">
            <span className="text-[#F89938] font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            A selection of our recent work
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all backdrop-blur-md ${
                activeFilter === filter
                  ? "bg-[#F89938] text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          style={{ y }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F89938]/50 transition-all overflow-hidden cursor-pointer aspect-square flex flex-col justify-between"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F89938]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Category Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#F89938]/20 text-[#F89938] text-xs font-semibold mb-4 backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Emoji Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
              </div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F89938] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#F89938] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
