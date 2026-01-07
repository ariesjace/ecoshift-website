"use client"

import { InfiniteSlider } from "@/components/core/infinite-slider"

export default function Marquee() {
  const companies = [
  { name: "2go", logo: "/logos/2go.png" },
  { name: "acienda", logo: "/logos/acienda.png" },
  { name: "acp", logo: "/logos/acp.png" },
  { name: "acsp", logo: "/logos/acsp.png" },
  { name: "agx", logo: "/logos/agx.png" },
  { name: "amia", logo: "/logos/amia.png" },
  { name: "amsteel", logo: "/logos/amsteel.png" },
  { name: "ansaldo", logo: "/logos/ansaldo.png" },
  { name: "apex", logo: "/logos/apex.png" },
  { name: "arquee", logo: "/logos/arquee.png" },
  { name: "ausher", logo: "/logos/ausher.png" },
  { name: "bev", logo: "/logos/bev.png" },
  { name: "bgcmm", logo: "/logos/bgcmm.png" },
  { name: "bonappetea", logo: "/logos/bonappeatea.png" },
  { name: "bonchon", logo: "/logos/bonchon.png" },
  { name: "bounty", logo: "/logos/bounty.png" },
  { name: "caltex", logo: "/logos/caltex.png" },
  { name: "cavacon", logo: "/logos/cavacon.png" },
  { name: "cbhs", logo: "/logos/cbhs.png" },
  { name: "cmc", logo: "/logos/cmc.png" },
  { name: "davaodoc", logo: "/logos/davaodoc.png" },
  { name: "dlsu", logo: "/logos/dlsub.png" },
  { name: "dlsum", logo: "/logos/dlsum.png" },
  { name: "dutyfree", logo: "/logos/dutyfree.jpg" },
  { name: "eaglecement", logo: "/logos/eaglecement.png" },
];


  return (
    <section className="pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-32 w-full overflow-hidden">
          <InfiniteSlider gap={60}>
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center min-w-max px-8 pb-10">
                <img
  src={company.logo || "/placeholder.svg"}
  alt={`${company.name} logo`}
  className="h-10 w-auto opacity-80 hover:opacity-100 transition-all grayscale hover:grayscale-0"
 />

              </div>
            ))}
          </InfiniteSlider>
        
         <div className="text-center mb-16">
          <p
  className="text-lg text-muted text-center mt-6"
  style={{ fontFamily: "var(--font-sans)" }}
>
  Trusted by Leading Companies
</p>

        </div>
          {/* Progressive Blur Overlays */}
        </div>
      </div>
    </section>
  )
}
