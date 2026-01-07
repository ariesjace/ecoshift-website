"use client"

import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Downtown Smart City Initiative",
      category: "Municipal",
      description: "Upgraded entire downtown area with smart LED street lights and IoT monitoring system.",
      url: "/smart-city-street-lighting.jpg",
    },
    {
      id: 2,
      title: "Corporate Office Energy Retrofit",
      category: "Commercial",
      description: "Complete lighting system upgrade for major tech corporation headquarters.",
      url: "/modern-office-lighting.jpg",
    },
    {
      id: 3,
      title: "Industrial Warehouse Modernization",
      category: "Industrial",
      description: "High-bay LED installation in manufacturing facility with motion sensors.",
      url: "/warehouse-industrial-lighting.jpg",
    },
    {
      id: 4,
      title: "Hospital Surgical Suite Upgrade",
      category: "Healthcare",
      description: "Specialized LED lighting for operating rooms with color temperature control.",
      url: "/hospital-surgical-lighting.jpg",
    },
    {
      id: 5,
      title: "University Campus Lighting Transformation",
      category: "Education",
      description: "Campus-wide sustainable lighting project for leading research university.",
      url: "/campus-university-lighting.jpg",
    },
    {
      id: 6,
      title: "Shopping Mall Entertainment Complex",
      category: "Retail",
      description: "Dynamic lighting system with ambient and accent lighting throughout mall.",
      url: "/retail-mall-lighting.jpg",
    },
  ]

  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION WITH IMAGE */}
      {/* HERO SECTION WITH IMAGE */}
{/* HERO SECTION WITH IMAGE */}
<section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero2.jpg"
      alt="Projects"
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
        Our Projects
      </h1>
      <p className="text-lg text-gray-200">
        See the impact we've made across diverse industries and communities worldwide.
      </p>
    </motion.div>
  </div>
</section>



      {/* GALLERY GRID */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="group relative cursor-pointer overflow-hidden border-border transition-all rounded-2xl border hover:border-ring hover:shadow-xl h-64">
                    <img
                      src={project.url || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                      <h3 className="mb-2 text-center text-lg font-semibold text-white">{project.title}</h3>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white border border-white/30">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 md:px-8 bg-emerald-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 text-emerald-100">
            Let's discuss how we can bring sustainable lighting to your space.
          </p>
          <Link href="/quotation">
            <button className="px-8 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-gray-100 transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
