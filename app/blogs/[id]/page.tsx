"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogDetail() {
  const params = useParams()

  // Handle the case where params.id could be undefined or an array
  const blogId = Array.isArray(params.id) ? params.id[0] : params.id

  // Blog data keyed by string ids
  const blogData: Record<string, any> = {
    "1": {
      title: "The Future of Smart Lighting: IoT Integration Guide",
      category: "technology",
      date: "January 15, 2025",
      author: "Sarah Chen",
      readTime: "5 min read",
      image: "/smart-technology.jpg",
      excerpt:
        "Discover how IoT technology is transforming lighting systems and what it means for your home or business.",
      content: `
        <h2>Introduction</h2>
        <p>The integration of Internet of Things (IoT) technology into lighting systems is revolutionizing how we illuminate our spaces. From smart homes to commercial buildings, IoT-enabled lighting is becoming the new standard.</p>
        
        <h2>What is IoT in Lighting?</h2>
        <p>IoT lighting systems use connected devices and sensors to provide intelligent control over lighting. These systems can communicate with each other and with central control hubs, allowing for unprecedented flexibility and efficiency.</p>
        
        <h2>Key Benefits</h2>
        <ul>
          <li>Remote Control: Manage lights from anywhere using your smartphone</li>
          <li>Energy Efficiency: Automated dimming and scheduling reduce consumption</li>
          <li>Enhanced Comfort: Personalized lighting scenes for different moods and activities</li>
          <li>Data Insights: Track and optimize energy usage patterns</li>
        </ul>
        
        <h2>Implementation Guide</h2>
        <p>Getting started with IoT lighting involves selecting compatible fixtures, installing a control hub, and downloading the associated mobile app. Most modern IoT lighting systems are designed for easy installation without extensive rewiring.</p>
        
        <h2>Future Outlook</h2>
        <p>As technology advances, we can expect even smarter lighting systems with AI integration, improved battery life, and better interoperability between different brands and platforms.</p>
      `,
    },
    "2": {
      title: "How LED Lights Reduce Your Carbon Footprint",
      category: "sustainability",
      date: "January 10, 2025",
      author: "John Martinez",
      readTime: "4 min read",
      image: "/carbon-footprint.jpg",
      excerpt: "Learn about the environmental impact of switching to LED technology and save money simultaneously.",
      content: `
        <h2>The LED Revolution</h2>
        <p>LED technology has become one of the most significant contributors to reducing global carbon emissions. By switching to LEDs, individuals and businesses can make a meaningful impact on the environment.</p>
        
        <h2>Energy Consumption Comparison</h2>
        <p>LEDs consume up to 75% less energy than traditional incandescent bulbs. This dramatic reduction translates directly into lower carbon emissions from power plants.</p>
        
        <h2>Lifespan and Waste Reduction</h2>
        <p>LEDs last 25 times longer than incandescent bulbs, reducing the frequency of replacements and minimizing electronic waste. This extended lifespan is crucial for environmental sustainability.</p>
        
        <h2>Financial Savings</h2>
        <p>While LEDs have a higher upfront cost, they pay for themselves through energy savings in just a few months. Over their lifetime, a single LED bulb can save hundreds of dollars in electricity costs.</p>
        
        <h2>Global Impact</h2>
        <p>If every household in the US switched to LEDs, it would prevent over 90 million tons of CO2 emissions annually. This is equivalent to taking 20 million cars off the road for a year.</p>
      `,
    },
    // Add more blog entries as needed, make sure keys are strings
  }

  // Only access blogData if blogId exists
  const blog = blogId ? blogData[blogId] : undefined

  if (!blog) {
    return (
      <main className="w-full overflow-hidden bg-white">
        <Header />
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-emerald-900 mb-4">Article Not Found</h1>
            <Link href="/blogs" className="text-emerald-600 hover:text-emerald-800 underline">
              Back to Blogs
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* BREADCRUMB */}
      <section className="py-4 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-emerald-600 hover:underline">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/blogs" className="text-emerald-600 hover:underline">
            Insights
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-700 font-semibold truncate">{blog.title}</span>
        </div>
      </section>

      {/* ARTICLE HEADER */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-900 rounded-full text-sm font-semibold">
                {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 leading-tight">{blog.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">{blog.author}</p>
                <p className="text-sm">{blog.date}</p>
              </div>
              <span className="hidden md:block text-gray-400">•</span>
              <p className="text-sm">{blog.readTime}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-4 md:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-12 px-4 md:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto prose prose-lg"
        >
          <div
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-8 bg-emerald-50 border-t-2 border-emerald-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Ready to upgrade your lighting?</h2>
          <Link
            href="/quotation"
            className="inline-block px-8 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition font-semibold"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
