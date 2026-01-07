"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function AboutBentoGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/[0.035] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 rounded-full" variant="secondary">
            <Sparkles className="mr-2 h-3 w-3" />
            Our Organization
          </Badge>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Driving Innovation in Sustainable Lighting
          </h2>
        </motion.div>

        <motion.div
          className="grid auto-rows-[minmax(200px,auto)] gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.12,
              },
            },
          }}
        >
          {/* Mission - Large Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group relative col-span-1 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="w-fit rounded-full bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.2em]"
                >
                  Mission
                </Badge>
                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                  Revolutionizing Sustainable Lighting
                </h3>
                <p className="text-sm text-foreground/70 md:text-base">
                  To provide innovative, energy-efficient solutions that reduce carbon footprints while enhancing
                  quality of life for communities worldwide.
                </p>
              </div>
              <Button
                variant="ghost"
                className="group/cta mt-8 gap-2 w-fit rounded-lg bg-background/70 px-4 py-2 text-sm text-foreground hover:bg-background/80"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Stats - Performance Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2"
          >
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="w-fit rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary"
              >
                Impact
              </Badge>
              <motion.div
                animate={{ rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 10,
                  ease: "easeInOut",
                }}
              >
                <TrendingUp className="h-5 w-5 text-primary" />
              </motion.div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Projects Completed", value: "500+" },
                { label: "CO2 Emissions Prevented", value: "50K tons" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision - Image Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group relative col-span-1 overflow-hidden rounded-2xl border border-border/40 bg-background/70 backdrop-blur hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:row-span-3"
          >
            <div className="absolute inset-0">
              <img
                src="/images/about.png"
                alt="Sustainable environment vision"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
            <div className="relative flex h-full flex-col justify-end space-y-4 p-6 md:p-8">
              <Badge
                variant="outline"
                className="w-fit rounded-full border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.2em]"
              >
                Our Vision
              </Badge>
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                A Brighter, Greener Future
              </h3>
              <p className="max-w-sm text-sm text-foreground/70 md:text-base">
                Making sustainable lighting solutions accessible to everyone worldwide.
              </p>
            </div>
          </motion.div>

          {/* Core Values - 3 Small Cards */}
          {[
            { title: "Sustainability", desc: "Environmental responsibility in every decision", icon: "🌱" },
            { title: "Innovation", desc: "Continuously evolving technology", icon: "💡" },
            { title: "Quality", desc: "Premium products that endure", icon: "⭐" },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:col-span-1"
              style={{
                gridColumn: index === 2 ? "span 2" : undefined,
              }}
            >
              <div className="space-y-4">
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
