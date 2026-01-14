"use client"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const topFeatures = [
    {
      title: "Energy-Efficient Lighting",
      label: "ENERGY_SAVINGS",
      description: "Smart & Automated Systems",
      image: "/lighting-energy-efficient.jpg",
    },
    {
      title: "Smart & Automated Systems",
      label: "AUTOMATION_CONTROL",
      description: "Control lighting from anywhere with our smart solutions.",
      image: "/lighting-smart-automation.jpg",
    },
    {
      title: "Durable, Premium Materials",
      label: "QUALITY_ASSURANCE",
      description: "Built to last with high-end materials and professional installation.",
      image: "/lighting-premium-materials.jpg",
    },
  ]

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

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-start justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ SYSTEM_MODULES</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Why choose our lighting solutions
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Innovation meets reliability in every product.
          </p>
        </motion.div>

        {/* Top row features */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {topFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-muted-foreground">FIELD</span>
                <span className="text-xs font-mono text-muted-foreground">{feature.label}</span>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 mb-6 overflow-hidden">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row features */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Custom Designs */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex gap-6">
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0 overflow-hidden">
                <motion.img
                  src="/lighting-custom-design.jpg"
                  alt="Custom designs"
                  className="w-20 h-20 object-cover rounded"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">CUSTOM</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">Custom Lighting Designs</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored solutions for any space. Residential, commercial, or architectural lighting designed
                  specifically for your needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Installation */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">SERVICE</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">Professional Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Expert installation by certified technicians. Fast, reliable, and backed by our comprehensive warranty
                  and support.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0 overflow-hidden">
                <motion.img
                  src="/lighting-installation-service.jpg"
                  alt="Professional installation"
                  className="w-20 h-20 object-cover rounded"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
