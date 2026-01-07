"use client"

import { useState } from "react"
import Marquee from "@/components/homepage/marquee"
import { HeroMarquee } from "./hero-marquee"
import { motion } from "framer-motion"

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-eco-green via-eco-green-light to-eco-green/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-4 right-4 sm:top-10 sm:right-10 md:top-10 md:right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT — TEXT */}
          <motion.div className="order-1" variants={itemVariants}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight text-balance"
              variants={itemVariants}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Fastest Growing Provider of Innovative Lighting Solutions
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed text-pretty"
              variants={itemVariants}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Together, let's choose the brighter choice for every Filipino, one community at a time.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={itemVariants}>
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white text-eco-green font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Explore Solutions
              </motion.button>

              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition text-sm sm:text-base"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT — MARQUEE */}
          <motion.div
            className="order-2 md:order-2 flex justify-center items-center relative mt-6 md:mt-0"
            variants={itemVariants}
          >
            <HeroMarquee />
          </motion.div>
        </motion.div>

        {/* Brand Marquee Section Below */}
        <motion.div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16" variants={itemVariants}>
          <Marquee />
        </motion.div>
      </div>
    </section>
  )
}
