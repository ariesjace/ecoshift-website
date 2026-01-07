"use client"

import { motion, type Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ContactInfoBento() {
  return (
    <motion.div
      className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
      {/* Email - Medium */}
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -4 }}
        className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:col-span-2"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/40 bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              Email
            </Badge>
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <p className="mt-2 text-sm text-foreground/70">info@ecoshift.com</p>
            <p className="text-sm text-foreground/60">hello@ecoshift.com</p>
          </div>
        </div>
      </motion.div>

      {/* Phone - Medium */}
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -4 }}
        className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:col-span-2"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/40 bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              Phone
            </Badge>
            <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
            <p className="mt-2 text-sm text-foreground/70">+1 (555) 123-4567</p>
            <p className="text-sm text-foreground/60">+1 (555) 987-6543</p>
          </div>
        </div>
      </motion.div>

      {/* Address - Small */}
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -4 }}
        className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      >
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              Address
            </Badge>
            <h4 className="font-semibold text-foreground text-sm">HQ Location</h4>
            <p className="mt-1 text-xs text-foreground/70">123 Eco Street, Green City, GC 12345</p>
          </div>
        </div>
      </motion.div>

      {/* Hours - Small */}
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -4 }}
        className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      >
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              Hours
            </Badge>
            <h4 className="font-semibold text-foreground text-sm">Business Hours</h4>
            <p className="mt-1 text-xs text-foreground/70">Mon - Fri: 9AM - 6PM</p>
            <p className="text-xs text-foreground/70">Sat - Sun: Closed</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
