"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Header from "@/components/homepage/header"
import Footer from "@/components/homepage/footer"
import BackToTop from "@/components/homepage/back-to-top"

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
      setFormData({ fullName: "", email: "", phone: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-52 pb-40 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.8] mb-8"
          >
            Get Your <br /> Free <span className="text-emerald-700 italic">Quote</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Request a free lighting consultation and quote tailored to your project. Our experts will review your
            requirements and provide a customized solution.
          </p>
        </div>
      </section>

      <section className="relative z-20 -mt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Info & Contact Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-card p-10 rounded-3xl shadow-xl border border-border">
                <h3 className="text-2xl font-black uppercase mb-8">
                  Quick <span className="text-emerald-700">Contacts</span>
                </h3>
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Email Us</p>
                      <p className="font-bold text-foreground">info@lightingco.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Call Us</p>
                      <p className="font-bold text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        Headquarters
                      </p>
                      <p className="font-bold text-foreground leading-tight">
                        123 Lighting Avenue, <br />
                        Tech City, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form with Professional Styling */}
            <div className="lg:col-span-8 bg-card p-8 md:p-16 rounded-3xl shadow-xl border border-border">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-3 block ml-2">
                    Full Name
                  </label>
                  <input
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-3 block ml-2">
                    Email Address
                  </label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-3 block ml-2">
                    Phone Number
                  </label>
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-bold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-3 block ml-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    placeholder="Describe your lighting project requirements, space type, and any specific needs..."
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-bold resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-lg flex items-center justify-center gap-4 transition-all
                      ${status === "success" ? "bg-emerald-700 shadow-emerald-700/30" : status === "error" ? "bg-red-600" : "bg-emerald-700 shadow-emerald-700/30"} text-white`}
                  >
                    {status === "loading"
                      ? "Processing..."
                      : status === "success"
                        ? "Quote Sent!"
                        : status === "error"
                          ? "Try Again"
                          : "Get Free Quote"}
                    <Send size={16} />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
