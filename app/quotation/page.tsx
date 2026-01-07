"use client"

import Image from "next/image"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { ContactInfoBento } from "@/components/contact/contact-info-bento"
import { motion } from "framer-motion"

export default function Quotation() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION WITH IMAGE */}
      {/* HERO SECTION WITH IMAGE */}
{/* HERO SECTION WITH IMAGE */}
<section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
  <div className="absolute inset-0 min-h-[400px] md:min-h-[500px]">
    <Image
      src="/images/hero2.jpg"
      alt="Quotation Hero"
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
        Request a Quote
      </h1>

      <p className="text-lg text-gray-200">
        Get a personalized quote for your lighting project. Fill out the form below and our team will contact you within 24 hours.
      </p>
    </motion.div>
  </div>
</section>



      {/* CONTACT INFO BENTO GRID */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ContactInfoBento />
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <ContactFormSection />

      {/* CTA SECTION */}
      <section className="py-16 px-4 md:px-8 bg-emerald-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Quick Response Guarantee</h2>
          <p className="text-lg text-emerald-100">
            Our team responds to all quote requests within 24 business hours. We're ready to help bring your lighting
            vision to life.
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
