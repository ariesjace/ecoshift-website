"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProductDetail() {
  const params = useParams()
  const productId = Array.isArray(params.id) ? params.id[0] : params.id
  const productKey = productId ? Number(productId) : undefined

  const productData = {
    1: {
      name: "LED Bulb Pro",
      category: "Residential",
      image: "/led-bulb.jpg",
      description: "Energy-efficient LED bulbs for home use. 80% more efficient than traditional bulbs.",
      fullDescription:
        "Our LED Bulb Pro is the perfect choice for homeowners looking to reduce their energy consumption without sacrificing light quality. Engineered with cutting-edge LED technology, these bulbs last significantly longer than traditional incandescent bulbs and use a fraction of the energy.",
      specs: {
        "Light Output": "1000 lumens",
        Lifespan: "10,000 hours",
        "Color Temperature": "Cool white light (5000K)",
        "Energy Consumption": "10W",
        Compatibility: "Standard E26 socket",
        Warranty: "5 years",
      },
      benefits: [
        "Reduces electricity bills by up to 80%",
        "Environmentally friendly with minimal carbon footprint",
        "Instant on, no warm-up time required",
        "Produces no heat, safe for enclosed fixtures",
        "Available in multiple color temperatures",
      ],
      applications: ["Home lighting", "Office spaces", "Retail displays", "Architectural lighting"],
    },
    2: {
      name: "Smart Lighting System",
      category: "Residential",
      image: "/smart-light.jpg",
      description: "IoT-enabled lighting control system for smart homes. Control from your phone.",
      fullDescription:
        "Transform your home with our Smart Lighting System. This integrated IoT solution allows you to control every light in your home from your smartphone, tablet, or voice commands. Create custom scenes, set schedules, and monitor energy consumption in real-time.",
      specs: {
        Connection: "WiFi & Bluetooth",
        Compatibility: "Alexa, Google Home",
        "Color Options": "16 million colors",
        "Brightness Levels": "100 customizable levels",
        "Control Range": "100+ feet",
        "App Availability": "iOS & Android",
      },
      benefits: [
        "Control lights from anywhere in the world",
        "Energy monitoring for cost optimization",
        "Automated schedules and scenes",
        "Voice control integration",
        "Enhanced home security with lighting automation",
      ],
      applications: ["Smart homes", "Modern apartments", "Commercial spaces", "Hospitality"],
    },
    3: {
      name: "Commercial LED Panel",
      category: "Commercial",
      image: "/led-panel.jpg",
      description: "High-output LED panels for offices and retail spaces. Instant on, no warm-up.",
      fullDescription:
        "Designed for demanding commercial environments, our LED Panels deliver consistent, high-quality illumination. Perfect for offices, retail stores, and healthcare facilities where reliability and efficiency are paramount.",
      specs: {
        "Light Output": "5000 lumens",
        "Panel Size": "2x2 feet",
        Dimmability: "1-100%",
        "Color Rendering": "CRI 95+",
        "Operating Temperature": "-20°C to 60°C",
        Warranty: "10 years",
      },
      benefits: [
        "Superior color accuracy for retail and design work",
        "Flicker-free operation reduces eye strain",
        "Dimmable for flexible lighting control",
        "Low maintenance requirements",
        "Exceptional energy efficiency",
      ],
      applications: ["Office buildings", "Retail stores", "Healthcare facilities", "Educational institutions"],
    },
    4: {
      name: "Industrial High Bay Light",
      category: "Industrial",
      image: "/high-bay.jpg",
      description: "Heavy-duty lighting for warehouses and factories. Built to last.",
      fullDescription:
        "Our Industrial High Bay Lights are engineered for the toughest environments. With robust construction and superior performance, these fixtures illuminate large spaces efficiently and reliably, reducing operational costs while improving worker safety.",
      specs: {
        "Light Output": "15000 lumens",
        "IP Rating": "IP65 (dust and water resistant)",
        "Operating Temperature": "-40°C to 50°C",
        "Mounting Height": "20-40 feet",
        Warranty: "15 years",
        Certifications: "UL, CE, RoHS",
      },
      benefits: [
        "Exceptional brightness for large spaces",
        "Rugged design for industrial environments",
        "Temperature controlled operation",
        "Reduced heat emission",
        "Minimal maintenance requirements",
      ],
      applications: ["Warehouses", "Factories", "Parking structures", "Sports facilities"],
    },
    5: {
      name: "Outdoor Garden Light",
      category: "Residential",
      image: "/garden-light.jpg",
      description: "Weather-resistant outdoor lighting for gardens and patios.",
      fullDescription:
        "Enhance your outdoor spaces with our Solar-Powered Garden Lights. Perfect for pathways, patios, and garden beds, these lights provide ambiance while being completely energy-independent.",
      specs: {
        "Power Source": "Solar panel (2W)",
        "Battery Capacity": "1000mAh",
        Runtime: "8-12 hours per charge",
        "Detection Range": "3-5 meters",
        "Weather Resistance": "IP65",
        Warranty: "3 years",
      },
      benefits: [
        "Zero electricity costs",
        "Motion-activated for added security",
        "Fully automatic operation",
        "Weather-resistant construction",
        "No wiring required",
      ],
      applications: ["Garden lighting", "Pathway illumination", "Patio areas", "Outdoor security"],
    },
    6: {
      name: "Street Light LED",
      category: "Commercial",
      image: "/street-light.jpg",
      description: "Municipal-grade LED street lighting. Superior brightness and durability.",
      fullDescription:
        "Our Street Light LED systems are trusted by municipalities worldwide. Designed for reliability and efficiency, they provide superior illumination while significantly reducing energy consumption and maintenance costs.",
      specs: {
        "Light Output": "20000+ lumens",
        "Auto Dimming": "0-50% reduction",
        "Detection System": "Smart sensors",
        Warranty: "10 years",
        Certifications: "IEC, CE, NEMA",
        "Expected Lifespan": "50000+ hours",
      },
      benefits: [
        "Significant energy and cost savings",
        "Smart dimming reduces light pollution",
        "Improved public safety and visibility",
        "Reduced carbon emissions",
        "Minimal maintenance required",
      ],
      applications: ["Street lighting", "Parking areas", "Public spaces", "Highway lighting"],
    },
  }

  const product = productKey ? productData[productKey as keyof typeof productData] : undefined

  if (!product) {
    return (
      <main className="w-full overflow-hidden bg-white">
        <Header />
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-emerald-900 mb-4">Product Not Found</h1>
            <Link href="/products" className="text-emerald-600 hover:text-emerald-800 underline">
              Back to Products
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
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-emerald-600 hover:underline">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/products" className="text-emerald-600 hover:underline">
            Products
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-700 font-semibold">{product.name}</span>
        </div>
      </section>

      {/* PRODUCT DETAIL SECTION */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* IMAGE */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="bg-gray-100 rounded-2xl p-6 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>

            {/* DETAILS */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-900 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-emerald-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.fullDescription}</p>

              <Link
                href="/quotation"
                className="inline-block px-8 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition font-semibold mb-8"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>

          {/* SPECIFICATIONS */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-emerald-900 mt-16 mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-emerald-900 mb-2">{key}</h3>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BENEFITS */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-3xl font-bold text-emerald-900 mt-16 mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-emerald-600 text-2xl flex-shrink-0">✓</div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* APPLICATIONS */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-3xl font-bold text-emerald-900 mt-16 mb-8">Applications</h2>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app, i) => (
                <div key={i} className="px-6 py-3 bg-emerald-100 text-emerald-900 rounded-full font-semibold">
                  {app}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
