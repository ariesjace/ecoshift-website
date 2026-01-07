"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  image: string
  category: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "LED Bulbs",
    category: "Residential",
    image: "/professional-led-bulbs-product.jpg",
    description: "Energy-efficient LED bulbs for every room in your home",
  },
  {
    id: 2,
    name: "Commercial Fixtures",
    category: "Commercial",
    image: "/commercial-lighting-fixtures.jpg",
    description: "Industrial-grade lighting for offices and warehouses",
  },
  {
    id: 3,
    name: "Smart Lighting",
    category: "Smart Home",
    image: "/smart-lighting-system-iot.jpg",
    description: "IoT-enabled smart lights with app control and automation",
  },
  {
    id: 4,
    name: "Outdoor Lights",
    category: "Outdoor",
    image: "/outdoor-garden-lighting.jpg",
    description: "Weather-resistant outdoor lighting solutions",
  },
]

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length)
  }

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
            Our Product Range
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our comprehensive collection of lighting solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `-${activeIndex * 100}%` }}
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <motion.div
                      className="relative overflow-hidden rounded-xl aspect-square bg-muted"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <div>
                      <motion.span
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {product.category}
                      </motion.span>

                      <motion.h3
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {product.name}
                      </motion.h3>

                      <motion.p
                        className="text-base md:text-lg text-muted-foreground mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {product.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button size="lg" className="group gap-2">
                          Explore Product
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handlePrevious} aria-label="Previous product">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next product">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-sm text-muted-foreground">
              {activeIndex + 1} / {products.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
