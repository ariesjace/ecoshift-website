"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    quote:
      "Ecoshift transformed our office lighting and reduced our energy bill by 60%. The smart features are amazing!",
    author: "Maria Santos",
    role: "Facility Manager, TechCorp",
    rating: 5,
  },
  {
    quote: "Outstanding customer service and top-quality products. We've been using their lights for 3 years now.",
    author: "John Rivera",
    role: "Owner, Rivera Retail",
    rating: 5,
  },
  {
    quote: "The installation was seamless and the results exceeded expectations. Highly recommended for any business.",
    author: "Angela Cruz",
    role: "Operations Director, Hospitality Plus",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by leading businesses across the Philippines
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
