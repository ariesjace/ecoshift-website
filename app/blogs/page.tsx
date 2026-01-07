"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "sustainability", name: "Sustainability" },
    { id: "technology", name: "Technology" },
    { id: "tips", name: "Tips & Guides" },
  ]

  const blogs = [
    {
      id: 1,
      title: "The Future of Smart Lighting: IoT Integration Guide",
      category: "technology",
      date: "January 15, 2025",
      author: "Sarah Chen",
      excerpt:
        "Discover how IoT technology is transforming lighting systems and what it means for your home or business.",
      readTime: "5 min read",
      image: "/smart-technology.jpg",
    },
    {
      id: 2,
      title: "How LED Lights Reduce Your Carbon Footprint",
      category: "sustainability",
      date: "January 10, 2025",
      author: "John Martinez",
      excerpt: "Learn about the environmental impact of switching to LED technology and save money simultaneously.",
      readTime: "4 min read",
      image: "/carbon-footprint.jpg",
    },
    {
      id: 3,
      title: "10 Energy-Saving Tips for Commercial Spaces",
      category: "tips",
      date: "January 5, 2025",
      author: "Michael Torres",
      excerpt: "Practical strategies to reduce energy consumption in offices and retail environments.",
      readTime: "6 min read",
      image: "/energy-saving.jpg",
    },
    {
      id: 4,
      title: "Understanding Color Temperature in Lighting",
      category: "tips",
      date: "December 28, 2024",
      author: "Sarah Chen",
      excerpt: "A comprehensive guide to color temperature and how to choose the right lighting for every space.",
      readTime: "5 min read",
      image: "/color-temperature.jpg",
    },
    {
      id: 5,
      title: "Green Buildings: Sustainable Lighting Standards",
      category: "sustainability",
      date: "December 20, 2024",
      author: "John Martinez",
      excerpt: "Explore LEED certification requirements and sustainable lighting solutions for modern buildings.",
      readTime: "7 min read",
      image: "/green-buildings.jpg",
    },
    {
      id: 6,
      title: "The Science Behind LED Efficiency",
      category: "technology",
      date: "December 15, 2024",
      author: "Michael Torres",
      excerpt: "Understand the physics that makes LED technology so much more efficient than traditional lighting.",
      readTime: "6 min read",
      image: "/led-technology.jpg",
    },
  ]

  const filteredBlogs =
    selectedCategory === "all" ? blogs : blogs.filter((b) => b.category === selectedCategory)

  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION */}
      {/* HERO SECTION WITH IMAGE */}
<section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero2.jpg"
      alt="Blogs Hero"
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
      className="text-center md:text-left max-w-2xl"
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-white mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Insights & Articles
      </h1>

      <p className="text-lg text-gray-200">
        Stay informed about sustainable lighting, energy efficiency, and the latest innovations.
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

      {/* BLOGS GRID */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110"
                    priority={i < 2}
                  />

                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div>
                      <p className="font-semibold text-gray-700">{blog.author}</p>
                      <p>{blog.date}</p>
                    </div>

                    <span className="bg-emerald-50 text-emerald-900 px-3 py-1 rounded-lg font-semibold">
                      {blog.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="mt-4 text-emerald-600 hover:text-emerald-800 font-semibold inline-flex items-center gap-2"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 px-4 md:px-8 bg-emerald-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-8">Get the latest insights and updates delivered to your inbox.</p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-900"
            />
            <button className="px-6 py-3 bg-emerald-900 text-white rounded-xl hover:bg-emerald-800 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
