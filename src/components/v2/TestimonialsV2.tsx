"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsV2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "SJ",
      rating: 5,
      text: "FridayMonk transformed our vision into reality. Their technical expertise and attention to detail exceeded our expectations. The team delivered a scalable solution that has become the backbone of our business.",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      image: "MC",
      rating: 5,
      text: "Working with FridayMonk was a game-changer. They understood our complex requirements and delivered a robust, high-performance system. Their agile approach kept us in the loop throughout the development.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, CloudNine",
      image: "ER",
      rating: 5,
      text: "The level of professionalism and technical skill is outstanding. FridayMonk didn't just build our product—they became true partners in our success. Highly recommend for any serious tech project.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-[#0f172a] to-[#0a0f1a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-[#F89938]/5 rounded-full blur-3xl"
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
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F89938] to-[#FFB366]">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients
          </p>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className="p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 relative"
              >
                {/* Quote Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F89938] to-[#FFB366] flex items-center justify-center shadow-lg"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-[#F89938] text-[#F89938]" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#364550] to-[#5A6B75] flex items-center justify-center text-white font-bold text-lg"
                  >
                    {testimonials[currentIndex].image}
                  </motion.div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#F89938]/50 flex items-center justify-center text-white hover:text-[#F89938] transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#F89938] w-8"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#F89938]/50 flex items-center justify-center text-white hover:text-[#F89938] transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
