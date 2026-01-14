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

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Office Complex - Downtown District",
      description: "Complete lighting retrofit for 50,000 sq ft corporate office. Energy savings: 45%.",
      image: "/project-office-complex.jpg",
    },
    {
      title: "Luxury Residential Development",
      description: "Smart lighting systems for premium residential units with automated control.",
      image: "/project-residential.jpg",
    },
    {
      title: "Retail Shopping Center Upgrade",
      description: "Enhanced ambiance and efficiency for 100+ retail spaces and common areas.",
      image: "/project-retail.jpg",
    },
    {
      title: "Hospitality & Restaurant Design",
      description: "Custom architectural lighting creating sophisticated atmospheres for dining establishments.",
      image: "/project-hospitality.jpg",
    },
    {
      title: "Industrial Warehouse Lighting",
      description: "High-efficiency LED systems for manufacturing facility. 24/7 operational reliability.",
      image: "/project-industrial.jpg",
    },
    {
      title: "Medical Facility Lighting",
      description: "Specialized lighting solutions for healthcare environment with compliance certification.",
      image: "/project-medical.jpg",
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
              <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ PROJECTS</span>
              <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6 leading-tight">Completed projects</h1>
              <p className="text-muted-foreground text-lg">
                Explore our portfolio of successful lighting installations across diverse industries and spaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <div className="w-full h-48 bg-secondary/50 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 leading-snug">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-emerald-700 font-medium text-sm hover:text-emerald-800 transition-colors flex items-center gap-2"
                    >
                      View Details
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
