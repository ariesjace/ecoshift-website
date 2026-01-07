"use client"

import { motion } from "framer-motion"
import { Zap, Leaf, Lightbulb, BarChart3 } from "lucide-react"
import { FeatureCard } from "./feature-card"

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Save up to 80% on energy costs with our cutting-edge LED technology.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable solutions that reduce carbon footprint for a greener future.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Advanced smart lighting systems with IoT integration and automation.",
  },
  {
    icon: BarChart3,
    title: "Scalable",
    description: "Solutions that grow with your business from small to enterprise scale.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Ecoshift
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Industry-leading lighting solutions trusted by thousands of businesses worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
