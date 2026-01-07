"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CardSwap, { Card as SwapCard } from "@/components/CardSwap"
import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"

const images = [
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/16b6bd12985bad5dbc276baa9d432ddd-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/afad3256d5a39a6b6ac3ff21d225f2bc-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/b72f4c15433b93e4694308653f7c7728-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/3defe5f64f582cc2c01bdcea8f91353f-2.png",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/03aab674112e12de6878c3d1842220c0-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/cdd2d154bd95d60bfcda002103a2a1a2-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/71d0429474c567d7b0ea94d4a77afcb8-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/10e8cd151738fb41efea641460d9064b-2.jpg",
]

export function CTABlock() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
              {/* Left: CTA Text */}
              <motion.div
                className="flex-1 w-full text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                  Explore Our Lighting Categories
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  Energy-efficient and stylish lighting solutions perfect for homes, offices, and commercial spaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                    <Button size="lg" className="group w-full sm:w-auto gap-2 text-sm sm:text-base">
                      Start a Conversation
                      <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:scale-110" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="group w-full sm:w-auto gap-2 bg-transparent text-sm sm:text-base"
                    >
                      View My Work
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span>Available for new projects</span>
                  </div>
                  <div>
                    <span>Response time: &lt;24 hours</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center w-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative w-48 h-24 sm:w-60 sm:h-32 md:w-72 md:h-40 lg:w-80 lg:h-52">
                  <CardSwap width="100%" height="100%" cardDistance={12} verticalDistance={8}>
                    {images.map((src, idx) => (
                      <SwapCard
                        key={idx}
                        className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl"
                        style={{ border: "none" }}
                      >
                        <img
                          src={src || "/placeholder.svg"}
                          alt={`Lighting ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwapCard>
                    ))}
                  </CardSwap>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
