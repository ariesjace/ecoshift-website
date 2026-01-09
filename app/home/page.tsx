"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/homepage/hero"
import { CTABlock } from "@/components/homepage/ctablock"
import { FeaturesSection } from "@/components/homepage/features-section"
import { StatsSection } from "@/components/homepage/stats-section"
import { ProductCarousel } from "@/components/homepage/product-carousel"
import { TestimonialsSection } from "@/components/homepage/testimonials-section"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 150, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <CTABlock />
      <ProductCarousel />
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
