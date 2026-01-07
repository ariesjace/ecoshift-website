"use client"

import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import { AboutBentoGrid } from "@/components/about-us/about-bento-grid"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION WITH IMAGE */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero2.jpg"
            alt="Ecoshift office"
            fill
            className="object-cover"
            priority
          />

          {/* DARK EMERALD OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/85 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-16 max-w-2xl"
          >
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Ecoshift
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Leading the sustainable lighting revolution since 2015. We believe that
              innovation and environmental responsibility go hand in hand.
            </p>
          </motion.div>
        </div>
      </section>

      <AboutBentoGrid />

      <Footer />
      <ScrollToTop />
    </main>
  )
}
