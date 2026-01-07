"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
  ]

  const products = [
    {
      id: 1,
      name: "LED Bulb Pro",
      category: "residential",
      image: "/led-bulb.jpg",
      description: "Energy-efficient LED bulbs for home use. 80% more efficient than traditional bulbs.",
      specs: ["1000 lumens", "10,000 hours lifespan", "Cool white light"],
    },
    {
      id: 2,
      name: "Smart Lighting System",
      category: "residential",
      image: "/smart-light.jpg",
      description: "IoT-enabled lighting control system for smart homes. Control from your phone.",
      specs: ["Voice control compatible", "Energy monitoring", "16M color options"],
    },
    {
      id: 3,
      name: "Commercial LED Panel",
      category: "commercial",
      image: "/led-panel.jpg",
      description: "High-output LED panels for offices and retail spaces. Instant on, no warm-up.",
      specs: ["5000 lumens", "Flicker-free", "Dimmable"],
    },
    {
      id: 4,
      name: "Industrial High Bay Light",
      category: "industrial",
      image: "/high-bay.jpg",
      description: "Heavy-duty lighting for warehouses and factories. Built to last.",
      specs: ["15000 lumens", "IP65 rated", "Temperature control"],
    },
    {
      id: 5,
      name: "Outdoor Garden Light",
      category: "residential",
      image: "/garden-light.jpg",
      description: "Weather-resistant outdoor lighting for gardens and patios.",
      specs: ["Solar powered", "Motion sensor", "Auto on/off"],
    },
    {
      id: 6,
      name: "Street Light LED",
      category: "commercial",
      image: "/street-light.jpg",
      description: "Municipal-grade LED street lighting. Superior brightness and durability.",
      specs: ["20000+ lumens", "Auto dimming", "10-year warranty"],
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION */}
      {/* HERO SECTION WITH IMAGE */}
<section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero2.jpg"
      alt="Products"
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
      className="text-center md:text-left mb-8 max-w-2xl"
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-white mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Our Product Range
      </h1>

      <p className="text-lg text-gray-200">
        Discover our comprehensive selection of sustainable lighting solutions for every application.
      </p>
    </motion.div>
  </div>
</section>


      {/* CATEGORY FILTER */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-xl font-semibold transition ${
                  selectedCategory === cat.id
                    ? "bg-emerald-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition group"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="mb-4 space-y-1">
                    {product.specs.map((spec, j) => (
                      <p key={j} className="text-sm text-gray-500">
                        ✓ {spec}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block w-full text-center px-4 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
