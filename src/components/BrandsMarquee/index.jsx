"use client";

import React from "react";
import Slider from "react-slick";

const defaultBrands = [ 
  { name: "ChemDry", src: "/home/brands-marquee/Chemdry-Logo-Grayscale.png" },
  { name: "Fluid Concrete", src: "/home/brands-marquee/Fluid-Concrete-Grayscale.png" },
  { name: "Oreflow", src: "/home/brands-marquee/Oreflow-Logo-Grayscale.png" },
  { name: "Rv Parts", src: "/home/brands-marquee/RV-Parts-Express-Grayscale.png" },
  { name: "Smart Security", src: "/home/brands-marquee/Smart-Security-Grayscale.png" },
  { name: "Adlam Transport", src: "/home/brands-marquee/Adlam-Transport-Grayscale.png" },
  { name: "Bend tech", src: "/home/brands-marquee/Bend-Tech-Logo-maicopy.png" }, 
  { name: "ChemDry", src: "/home/brands-marquee/Chemdry-Logo-Grayscale.png" },
  { name: "Fluid Concrete", src: "/home/brands-marquee/Fluid-Concrete-Grayscale.png" },
  { name: "Oreflow", src: "/home/brands-marquee/Oreflow-Logo-Grayscale.png" },
  { name: "Rv Parts", src: "/home/brands-marquee/RV-Parts-Express-Grayscale.png" },
  { name: "Smart Security", src: "/home/brands-marquee/Smart-Security-Grayscale.png" },
  { name: "Adlam Transport", src: "/home/brands-marquee/Adlam-Transport-Grayscale.png" },
  { name: "Bend tech", src: "/home/brands-marquee/Bend-Tech-Logo-maicopy.png" }, 
];

export default function BrandsMarquee({
  title = "TRUSTED BY BRANDS GLOBALLY",
  brands = defaultBrands
}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section className="py-12.5 bg-white">
      <div className="max-w-335 mx-auto px-6 lg:px-8 text-center">
        <h3 className="sm:text:[48px] text-[36px] lg:text-[64px] chakra font-bold uppercase lg:leading-[1.8em] leading-[1.3em] tracking-[0.32px] text-black mb-12">
          {title}
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <Slider {...settings} className="mx-auto px-4">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <div className="flex h-24 w-full items-center justify-center">
                <img
                  src={brand.src}
                  alt={`${brand.name} logo - Premium products`}
                  className="h-10 md:h-9.5 w-auto object-contain transition-all duration-300 ease-in-out hover:scale-110"
                  loading="lazy"
                  style={{ maxHeight: "56px" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
