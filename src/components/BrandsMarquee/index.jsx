"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const brands = [
  { name: "ChemDry", src: "/home/brands-marquee/Chemdry-Logo-Grayscale.png" },
  { name: "Fluid Concrete", src: "/home/brands-marquee/Fluid-Concrete-Grayscale.png" },
  { name: "Oreflow", src: "/home/brands-marquee/Oreflow-Logo-Grayscale.png" },
  { name: "Rv Parts", src: "/home/brands-marquee/RV-Parts-Express-Grayscale.png" },
  { name: "Smart Security", src: "/home/brands-marquee/Smart-Security-Grayscale.png" },
  { name: "Adlam Transport", src: "/home/brands-marquee/Adlam-Transport-Grayscale.png" },
  { name: "Bend tech", src: "/home/brands-marquee/Bend-Tech-Logo-maicopy.png" },
];

export default function BrandsSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",

    defaultAnimation: {
      duration: 1000, // 
      easing: (t) => t * t * (3 - 2 * t),
    },

    slides: {
      perView: 2,
      spacing: 12,
    },

    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 12 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 7, spacing: 20 },
      },
    },

    created(slider) {
      setInterval(() => {
        slider.next();
      }, 2000);
    },
  });

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-[32px] lg:text-[64px] font-bold uppercase mb-12">
          TRUSTED BY BRANDS GLOBALLY
        </h3>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center h-20"
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}