"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/homepage/hero"
import { CTABlock } from "@/components/homepage/ctablock"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0-1) over first 150px
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
      <CTABlock />
    </main>
  )
}
