"use client";

import React from "react";
import Slider from "react-slick";

// Standard Slick CSS imports (ensure these are in your global.css or here)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const defaultBrands = [ 
  { name: "ChemDry", src: "/home/brands-marquee/Chemdry-Logo-Grayscale.png" },
  { name: "Fluid Concrete", src: "/home/brands-marquee/Fluid-Concrete-Grayscale.png" },
  { name: "Oreflow", src: "/home/brands-marquee/Oreflow-Logo-Grayscale.png" },
  { name: "Rv Parts", src: "/home/brands-marquee/RV-Parts-Express-Grayscale.png" },
  { name: "Smart Security", src: "/home/brands-marquee/Smart-Security-Grayscale.png" },
  { name: "Adlam Transport", src: "/home/brands-marquee/Adlam-Transport-Grayscale.png" },
  { name: "Bend tech", src: "/home/brands-marquee/Bend-Tech-Logo-maicopy.png" },
];

export default function BrandsSlider({
  title = "TRUSTED BY BRANDS GLOBALLY",
  brands = defaultBrands
}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,          
    autoplay: true,
    autoplaySpeed: 2500, 
    cssEase: "ease-in-out", 
    slidesToShow: 6, 
    slidesToScroll: 1,
    pauseOnHover: false,
    draggable: true,
    swipe: true,
    responsive: [
      {
        // Large Tablets / Small Laptops
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        // Tablets
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        // Mobile Phones (Standard)
        breakpoint: 540, 
        settings: {
          slidesToShow: 2, // This ensures 2 items on most phones
        }
      },
      {
        // Small Mobile Phones
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="sm:text-[48px] text-[32px] lg:text-[64px] chakra font-bold uppercase lg:leading-[1.2em] leading-[1.3em] tracking-tight text-black mb-12">
          {title}
        </h3>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="outline-none px-4">
              {/* IMAGE WRAPPER: Forced height makes them look equal */}
              <div className="flex items-center justify-center h-16 md:h-24 w-full">
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}