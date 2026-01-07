"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 5)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Quotation", href: "/quotation" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-7xl mx-auto mt-4 px-4 pointer-events-auto"
      >
        {/* FLOATING NAV CONTAINER */}
        <div
          className={`
            h-16 w-full flex items-center justify-between px-6
            rounded-2xl
            transition-all duration-300
            ${
              hasScrolled
                ? "bg-emerald-900/75 shadow-2xl border border-white/10 backdrop-blur-2xl backdrop-saturate-150"
                : "bg-transparent shadow-none border-transparent backdrop-blur-0"
            }
          `}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
            <Image src="/logos/logo.png" alt="Ecoshift Logo" width={140} height={45} className="h-8 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8" style={{ fontFamily: "var(--font-sans)" }}>
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    text-sm uppercase transition
                    ${
                      active
                        ? "text-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.9)]"
                        : "text-gray-200 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/get-started">
              <button
                className={`
                  px-6 py-2 text-white rounded-xl transition uppercase
                  ${
                    hasScrolled
                      ? "bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl backdrop-saturate-150 hover:bg-white/20 hover:shadow-2xl"
                      : "bg-transparent border-transparent shadow-none"
                  }
                `}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              md:hidden mt-3 rounded-2xl
              bg-emerald-900/75
              backdrop-blur-2xl backdrop-saturate-150
              shadow-2xl border border-white/10
              py-4 px-4
            "
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      text-base uppercase transition
                      ${
                        active
                          ? "text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]"
                          : "text-gray-200 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                )
              })}

              {/* MOBILE CTA */}
              <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                <button
                  className="
                    w-full mt-2 px-6 py-3 text-white rounded-xl transition
                    uppercase
                    bg-white/10 border border-white/10 shadow-xl
                    backdrop-blur-xl backdrop-saturate-150
                    hover:bg-white/20 hover:shadow-2xl
                  "
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </header>
  )
}
