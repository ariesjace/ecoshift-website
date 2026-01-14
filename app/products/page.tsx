"use client"

import Header from "@/components/homepage/header"
import Footer from "@/components/homepage/footer"
import BackToTop from "@/components/homepage/back-to-top"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function ProductsPage() {
  const products = [
    {
      category: "Indoor Lighting",
      description: "LED fixtures for homes and interior spaces.",
      image: "/product-indoor.jpg",
    },
    {
      category: "Outdoor Lighting",
      description: "Durable solutions for exterior applications.",
      image: "/product-outdoor.jpg",
    },
    {
      category: "Architectural Lighting",
      description: "Premium design-focused lighting systems.",
      image: "/product-architectural.jpg",
    },
    {
      category: "Smart Lighting Systems",
      description: "Automated control and energy management.",
      image: "/product-smart.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32">
        {/* Hero */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ PRODUCTS</span>
              <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6 leading-tight">Our lighting solutions</h1>
              <p className="text-muted-foreground text-lg">
                Explore our comprehensive range of innovative and energy-efficient lighting products.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <div className="w-full h-64 bg-secondary/50 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.category}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-semibold text-2xl mb-2">{product.category}</h3>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-emerald-700 font-medium text-sm hover:text-emerald-800 transition-colors flex items-center gap-2"
                    >
                      Learn More
                      <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
