"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogDetail() {
  const params = useParams()
  const blogId = params.id

  const blogData = {
    1: {
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
    2: {
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
    3: {
      title: "10 Energy-Saving Tips for Commercial Spaces",
      category: "tips",
      date: "January 5, 2025",
      author: "Michael Torres",
      readTime: "6 min read",
      image: "/energy-saving.jpg",
      excerpt: "Practical strategies to reduce energy consumption in offices and retail environments.",
      content: `
        <h2>Optimize Lighting Design</h2>
        <p>Assess your current lighting layout and identify areas with excessive illumination. Many spaces are over-lit, wasting energy without improving visibility.</p>
        
        <h2>Implement Sensor Technology</h2>
        <p>Motion sensors and daylight sensors automatically adjust lighting based on occupancy and natural light availability, eliminating unnecessary usage.</p>
        
        <h2>Use LEDs Exclusively</h2>
        <p>Replace all fluorescent and incandescent fixtures with modern LED alternatives. The transition cost is quickly offset by energy savings.</p>
        
        <h2>Schedule Your Lighting</h2>
        <p>Program lighting systems to turn off during non-business hours and weekends. Automated schedules prevent forgotten lights from running all night.</p>
        
        <h2>Regular Maintenance</h2>
        <p>Clean fixtures regularly to maintain optimal light output. Dust accumulation can reduce efficiency by up to 25%.</p>
        
        <h2>Employee Awareness</h2>
        <p>Educate staff about energy conservation habits. Simple practices like turning off lights in unoccupied areas can significantly reduce consumption.</p>
      `,
    },
    4: {
      title: "Understanding Color Temperature in Lighting",
      category: "tips",
      date: "December 28, 2024",
      author: "Sarah Chen",
      readTime: "5 min read",
      image: "/color-temperature.jpg",
      excerpt: "A comprehensive guide to color temperature and how to choose the right lighting for every space.",
      content: `
        <h2>What is Color Temperature?</h2>
        <p>Color temperature is measured in Kelvin (K) and refers to the warmth or coolness of light. It's a critical factor in creating the right ambiance for any space.</p>
        
        <h2>Warm Light (2700K-3000K)</h2>
        <p>Warm light creates a cozy, inviting atmosphere. Perfect for living rooms, bedrooms, and restaurants. It promotes relaxation and comfort.</p>
        
        <h2>Neutral White (3500K-4100K)</h2>
        <p>Neutral white is ideal for workspaces and kitchens. It provides good visibility without the harshness of cool light, making it versatile for most applications.</p>
        
        <h2>Cool White (5000K-6500K)</h2>
        <p>Cool white light mimics daylight and is best for offices, studios, and retail spaces. It enhances alertness and is excellent for detailed work.</p>
        
        <h2>Choosing the Right Temperature</h2>
        <p>Consider the room's purpose, desired mood, and the time of day. Layering different color temperatures can create flexible lighting scenes.</p>
      `,
    },
    5: {
      title: "Green Buildings: Sustainable Lighting Standards",
      category: "sustainability",
      date: "December 20, 2024",
      author: "John Martinez",
      readTime: "7 min read",
      image: "/green-buildings.jpg",
      excerpt: "Explore LEED certification requirements and sustainable lighting solutions for modern buildings.",
      content: `
        <h2>Understanding LEED Certification</h2>
        <p>LEED (Leadership in Energy and Environmental Design) is a globally recognized certification for sustainable buildings. Lighting is a crucial component of LEED requirements.</p>
        
        <h2>Lighting Efficiency Credits</h2>
        <p>LEED awards points for lighting efficiency, requiring buildings to use LED technology and implement smart controls to minimize energy consumption.</p>
        
        <h2>Daylight Integration</h2>
        <p>Green buildings maximize natural daylight through strategic window placement and light shelves. This reduces reliance on artificial lighting and improves occupant well-being.</p>
        
        <h2>Quality of Light</h2>
        <p>LEED certification requires attention to color rendering, flicker elimination, and glare control to ensure healthy and productive work environments.</p>
        
        <h2>Smart Building Controls</h2>
        <p>Automated lighting systems that respond to occupancy and daylight levels are essential for achieving high LEED scores. These systems provide real-time monitoring and adjustment.</p>
        
        <h2>Future of Green Buildings</h2>
        <p>As standards continue to evolve, sustainable lighting becomes increasingly integrated with overall building performance and occupant experience.</p>
      `,
    },
    6: {
      title: "The Science Behind LED Efficiency",
      category: "technology",
      date: "December 15, 2024",
      author: "Michael Torres",
      readTime: "6 min read",
      image: "/led-technology-science.jpg",
      excerpt: "Understand the physics that makes LED technology so much more efficient than traditional lighting.",
      content: `
        <h2>How LEDs Work</h2>
        <p>LEDs (Light-Emitting Diodes) produce light through electroluminescence, a fundamentally different process than traditional incandescent or fluorescent lighting. Electrons recombine in a semiconductor material, directly producing photons (light).</p>
        
        <h2>Efficiency Comparison</h2>
        <p>Incandescent bulbs waste about 90% of energy as heat. Fluorescent bulbs are better at around 75% efficiency. LEDs achieve 80-90% efficiency, converting most electrical energy directly into light.</p>
        
        <h2>The Role of Semiconductors</h2>
        <p>The semiconductor material determines the color of light produced. Different materials emit different wavelengths, allowing for the wide range of colors available in LED lighting.</p>
        
        <h2>Heat Management</h2>
        <p>While LEDs produce less heat than traditional sources, proper heat dissipation is crucial for longevity and performance. Modern LED fixtures use sophisticated heat sinks and thermal management systems.</p>
        
        <h2>Quantum Dots and Future Innovations</h2>
        <p>Emerging quantum dot technology promises even higher efficiency and better color rendering. These nanoscale crystals are pushing the boundaries of what's possible in lighting.</p>
      `,
    },
  }

  const blog = blogData[blogId]

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
            dangerouslySetInnerHTML={{
              __html: blog.content
                .split("\n")
                .map((para) => {
                  if (para.startsWith("<h2>")) return para
                  if (para.startsWith("<ul>")) return para
                  if (para.trim() === "") return ""
                  return `<p className="text-lg">${para}</p>`
                })
                .join(""),
            }}
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
