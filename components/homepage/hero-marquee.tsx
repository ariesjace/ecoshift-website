"use client";

import { InfiniteSlider } from "@/components/core/infinite-slider";

export function HeroMarquee() {
  const gallery1 = [
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/1-PNCC.png",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/2-LANDBANK.png",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/3-CLARK-TAXIWAY.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/4-CLARK-INTERNATIONAL-AIRPORT-1.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/5-CLARK-INTERNATIONAL-AIRPORT-2.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/6-CLARK-INTERNATIONAL-AIRPORT.png",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/7-CLARK-INTERNATIONAL-AIRPORT.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/8-LANCASTER-NEW-CITY.png"
]


  const gallery2 =  [
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/39-SUN-LIFE.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/40-AGX.png",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/41-BGCOMM.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/42-MACONDRAY.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/43-ANSALDO.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/44-DLSU.jpg",
  "https://www.ecoshiftcorp.com/wp-content/uploads/2025/11/46-KIDZOONA.jpg"
];


  return (
    <>
      {/* MOBILE — Horizontal */}
      <div className="flex flex-col gap-4 md:hidden">
        <InfiniteSlider direction="horizontal" speed={22}>
          {gallery1.map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-[170px] w-[250px] rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          ))}
        </InfiniteSlider>

        <InfiniteSlider direction="horizontal" reverse speed={22}>
          {gallery2.map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-[170px] w-[250px] rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          ))}
        </InfiniteSlider>
      </div>

      {/* DESKTOP — Vertical */}
      <div className="hidden md:flex h-[480px] lg:h-[500px] gap-6">
        <InfiniteSlider direction="vertical" speed={22}>
          {gallery1.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[220px] md:w-[260px] h-[340px] md:h-[360px] rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />
          ))}
        </InfiniteSlider>

        <InfiniteSlider direction="vertical" reverse speed={22}>
          {gallery2.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[220px] md:w-[260px] h-[340px] md:h-[360px] rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />
          ))}
        </InfiniteSlider>
      </div>
    </>
  );
}
