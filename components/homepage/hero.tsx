"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "@/components/homepage/marquee";
import { HeroMarquee } from "./hero-marquee";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pt-40 pb-20 bg-gradient-to-br from-eco-green via-eco-green-light to-eco-green/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT */}
          <div className="order-1">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Fastest Growing Provider of Innovative Lighting Solutions
            </h1>

            <p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Together, let's choose the brighter choice for every Filipino, one
              community at a time.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="px-8 py-3 bg-white text-eco-green font-semibold rounded-lg hover:bg-gray-100 transition"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Explore Solutions
              </button>

              <button
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT — MARQUEE */}
          <div className="order-2 md:order-2 flex justify-center items-center relative mt-6 md:mt-0">
            <HeroMarquee />
          </div>
        </div>

        {/* Brand Marquee Section Below */}
        <div className="mt-12">
          <Marquee />
        </div>
      </div>
    </section>
  );
}
