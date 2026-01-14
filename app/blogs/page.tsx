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

export default function BlogsPage() {
  const blogs = [
    {
      id: "BLOG-0088",
      title: "Choosing the Right Lighting for Commercial Spaces",
      excerpt:
        "Learn how to select the perfect lighting solutions for your commercial environment. From retail stores to offices, we cover everything you need to know.",
      image: "/blog-commercial-lighting.jpg",
      date: "Jan 15, 2025",
    },
    {
      id: "BLOG-2301",
      title: "How Smart Lighting Reduces Energy Costs",
      excerpt:
        "Discover how modern smart lighting systems can cut your energy consumption by up to 40%. Explore automation features and their financial benefits.",
      image: "/blog-energy-savings.jpg",
      date: "Jan 12, 2025",
    },
    {
      id: "BLOG-7725",
      title: "Top Lighting Trends for Modern Architecture",
      excerpt:
        "Stay ahead of design trends with the latest in architectural lighting. From minimalist LED designs to dynamic color-changing systems, explore what's new.",
      image: "/blog-lighting-trends.jpg",
      date: "Jan 10, 2025",
    },
    {
      id: "BLOG-0030",
      title: "LED vs Traditional Lighting: A Comprehensive Comparison",
      excerpt:
        "Understand the differences between LED and traditional lighting. Learn about efficiency, longevity, cost savings, and environmental impact.",
      image: "/blog-led-comparison.jpg",
      date: "Jan 8, 2025",
    },
    {
      id: "BLOG-2134",
      title: "Case Study: 50% Energy Reduction in Office Retrofit",
      excerpt:
        "Real results from a real project. See how a corporate office cut energy costs by half through smart lighting upgrade. Metrics and ROI included.",
      image: "/blog-case-study.jpg",
      date: "Jan 5, 2025",
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
              <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ INSIGHTS</span>
              <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6 leading-tight">Lighting knowledge hub</h1>
              <p className="text-muted-foreground text-lg">
                Expert insights, industry trends, and project case studies from our lighting specialists.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <div className="w-full h-48 bg-secondary/50 overflow-hidden">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-emerald-700">{blog.id}</span>
                      <span className="text-xs text-muted-foreground">{blog.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mt-3 mb-2 leading-snug">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{blog.excerpt}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      Read More
                      <span className="ml-1">→</span>
                    </motion.a>
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
