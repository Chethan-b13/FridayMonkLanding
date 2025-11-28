"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Cloud, Smartphone, Cpu, Layers } from "lucide-react";
import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiGo,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiPrisma,
  SiAmazondynamodb,
  SiAmazonwebservices,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiFlutter,
  SiExpo,
  SiSwift,
  SiKotlin,
  SiOpenai,
  SiTensorflow,
  SiHuggingface,
} from "react-icons/si";

const techCategories = [
  {
    id: "frontend",
    icon: Layers,
    category: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Vue.js", icon: SiVuedotjs },
    ],
  },
  {
    id: "backend",
    icon: Code2,
    category: "Backend",
    description: "Robust and scalable server-side logic",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    id: "database",
    icon: Database,
    category: "Database",
    description: "Secure and efficient data management",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Supabase", icon: SiSupabase },
      { name: "Prisma", icon: SiPrisma },
      { name: "DynamoDB", icon: SiAmazondynamodb },
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    category: "Cloud",
    description: "Reliable infrastructure and deployment",
    technologies: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Azure", icon: Cloud },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    category: "Mobile",
    description: "Native-like experiences for all devices",
    technologies: [
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Expo", icon: SiExpo },
      { name: "Swift", icon: SiSwift },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    id: "ai",
    icon: Cpu,
    category: "AI & ML",
    description: "Intelligent features and automation",
    technologies: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "LangChain", icon: Code2 }, // Fallback to generic icon
      { name: "Pinecone", icon: Database }, // Fallback to generic icon
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
];

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="tech"
      ref={ref}
      className="relative py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#F89938] font-semibold tracking-wider uppercase text-sm">
            Our Toolbox
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#364550] mb-6">
            Built with Modern{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              Technology
            </span>
          </h2>
          <p className="text-xl text-[#5A6B75] max-w-3xl mx-auto font-medium leading-relaxed">
            We use the latest tools and frameworks to build scalable, secure, and
            high-performance applications.
          </p>
        </motion.div>

        {/* Tabs & Content */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {techCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                    activeTab === index
                      ? "bg-[#364550] text-white shadow-lg scale-105"
                      : "bg-gray-50 text-[#5A6B75] hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      activeTab === index
                        ? "bg-white/10 text-[#F89938]"
                        : "bg-white text-[#364550] group-hover:text-[#F89938]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-sm md:text-base">
                      {cat.category}
                    </span>
                    <span
                      className={`text-xs ${
                        activeTab === index ? "text-gray-300" : "text-gray-400"
                      }`}
                    >
                      {cat.technologies.length} technologies
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 h-full border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#364550] mb-2">
                  {techCategories[activeTab].category}
                </h3>
                <p className="text-[#5A6B75]">
                  {techCategories[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techCategories[activeTab].technologies.map((tech, i) => {
                  const TechIcon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-3 hover:border-[#F89938]/30 hover:shadow-md transition-all cursor-default group"
                    >
                      <TechIcon className="w-8 h-8 text-[#5A6B75] group-hover:text-[#F89938] transition-colors duration-300" />
                      <span className="font-semibold text-[#364550] text-sm group-hover:text-[#364550]">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
