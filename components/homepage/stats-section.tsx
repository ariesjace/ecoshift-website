"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { label: "Years in Business", value: 15, suffix: "+" },
  { label: "Clients Served", value: 5000, suffix: "+" },
  { label: "Projects Completed", value: 12000, suffix: "+" },
  { label: "Energy Saved (kWh)", value: 500000, suffix: "M+" },
]

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = value / 50

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [value])

  return <>{count}</>
}

export function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
