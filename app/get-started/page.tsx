"use client"

import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import Link from "next/link"

export default function GetStarted() {
  const steps = [
    {
      number: "01",
      title: "Schedule Consultation",
      description: "Book a free consultation with our lighting experts to discuss your needs and project scope.",
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "Our team visits your location to evaluate current lighting conditions and requirements.",
    },
    {
      number: "03",
      title: "Custom Proposal",
      description: "Receive a detailed proposal with product recommendations and cost estimates.",
    },
    {
      number: "04",
      title: "Installation",
      description: "Professional installation by our certified technicians with minimal disruption.",
    },
    {
      number: "05",
      title: "Training & Support",
      description: "Complete training on system usage and ongoing technical support for optimal performance.",
    },
  ]

  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Get Started Today
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Transform your space with sustainable, efficient lighting solutions in just 5 simple steps.
            </p>
            <Link href="/quotation">
              <button className="px-8 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-gray-100 transition">
                Request a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-8 items-start ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-emerald-900 text-white text-3xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 px-4 md:px-8 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-emerald-900 mb-12 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Ecoshift?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "💰", title: "Cost Savings", desc: "Up to 80% reduction in energy costs" },
              { icon: "🌱", title: "Eco-Friendly", desc: "Reduce your carbon footprint significantly" },
              { icon: "🔧", title: "Expert Installation", desc: "Professional technicians with years of experience" },
              { icon: "📞", title: "Ongoing Support", desc: "24/7 customer support and maintenance" },
              { icon: "✅", title: "Quality Guarantee", desc: "All products backed by comprehensive warranties" },
              { icon: "⚡", title: "Latest Technology", desc: "Smart lighting and IoT integration available" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-emerald-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-emerald-900 mb-12 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does installation typically take?",
                a: "Installation duration varies based on project size. Most residential projects take 1-3 days, while commercial projects may take 1-2 weeks.",
              },
              {
                q: "What is the warranty on your products?",
                a: "All our LED products come with a 5-10 year warranty depending on the product type. Extended warranties are available.",
              },
              {
                q: "Do you offer financing options?",
                a: "Yes, we offer flexible financing plans to make your lighting upgrade more affordable. Contact us for details.",
              },
              {
                q: "Can you integrate with existing smart home systems?",
                a: "Our systems are compatible with most major smart home platforms including Google Home, Alexa, and Apple HomeKit.",
              },
              {
                q: "How much energy will I actually save?",
                a: "LED lighting typically saves 75-80% on energy costs compared to traditional incandescent or halogen bulbs.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 hover:border-emerald-400 transition"
              >
                <h4 className="font-bold text-emerald-900 mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 md:px-8 bg-emerald-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lighting?</h2>
          <p className="text-lg mb-8 text-emerald-100">
            Join thousands of satisfied customers who've already made the switch to sustainable lighting.
          </p>
          <Link href="/quotation">
            <button className="px-8 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-gray-100 transition">
              Request Your Quote Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
