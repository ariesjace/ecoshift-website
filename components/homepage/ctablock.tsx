"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CardSwap, { Card as SwapCard } from "@/components/CardSwap";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const images = [
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/16b6bd12985bad5dbc276baa9d432ddd-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/afad3256d5a39a6b6ac3ff21d225f2bc-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/b72f4c15433b93e4694308653f7c7728-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/3defe5f64f582cc2c01bdcea8f91353f-2.png",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/03aab674112e12de6878c3d1842220c0-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/cdd2d154bd95d60bfcda002103a2a1a2-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/71d0429474c567d7b0ea94d4a77afcb8-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2024/07/10e8cd151738fb41efea641460d9064b-2.jpg"
];

export function CTABlock() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* CTA Card */}
          <Card className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            {/* Card Content: Two Columns */}
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 p-8 md:p-12 lg:p-16">
              {/* Left: CTA Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore Our Lighting Categories
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  Energy-efficient and stylish lighting solutions perfect for homes,
                  offices, and commercial spaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group w-full sm:w-auto gap-2">
                    Start a Conversation
                    <MessageSquare className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>

                  <Button size="lg" variant="outline" className="group w-full sm:w-auto gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground sm:gap-8">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span>Available for new projects</span>
                  </div>
                  <div>
                    <span>Response time: &lt;24 hours</span>
                  </div>
                </div>
              </div>

              {/* Right: CardSwap (closer to middle + slightly up + drop shadow) */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-80 h-52 -translate-x-20 -translate-y-4"> {/* adjust position */}
                  <CardSwap
                    width="100%"
                    height="100%"
                    cardDistance={15}
                    verticalDistance={10}
                  >
                    {images.map((src, idx) => (
                      <SwapCard
                        key={idx}
                        className="overflow-hidden rounded-xl shadow-2xl" // stronger shadow
                        style={{ border: "none" }}
                      >
                        <img
                          src={src}
                          alt={`Lighting ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwapCard>
                    ))}
                  </CardSwap>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
