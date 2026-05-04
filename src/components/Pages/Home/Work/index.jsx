"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/Container";

const workData = [
  { title: "Rock Solid Doors", category: "SEO", image: "/home/work/rock-solid.webp", link: "#" },
  { title: "Reef Group", category: "SEO", image: "/home/work/reef.webp", link: "#" },
  { title: "Chemdry", category: "Facebook", image: "/home/work/chemdry.webp", link: "#" },
  { title: "Smart Security", category: "SEO", image: "/home/work/smart-security.webp", link: "#" },
  { title: "RV Parts Express", category: "Adwords", image: "/home/work/rv-express.webp", link: "#" },
];

export default function WorkSlider() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isAtStart = useRef(true);
  const isAtEnd = useRef(false);

  // Robust visibility check for boundary logic
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1, // Default to 1 for mobile first
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    beforeChange: (oldIdx, newIdx) => {
      const visible = getVisibleCount();
      isAtStart.current = newIdx === 0;
      isAtEnd.current = newIdx >= workData.length - visible;
    },
    responsive: [
      {
        breakpoint: 5000, // Large Desktops
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 767, // Mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timeout = null;

    const handleWheel = (e) => {
      // Disable mouse wheel logic on mobile screens
      if (window.innerWidth < 768) return;
      
      if (!sliderRef.current) return;

      const delta = e.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;

      if ((scrollingDown && !isAtEnd.current) || (scrollingUp && !isAtStart.current)) {
        if (Math.abs(delta) > 10) { 
          e.preventDefault();
          
          if (!timeout) {
            if (scrollingDown) {
              sliderRef.current.slickNext();
            } else {
              sliderRef.current.slickPrev();
            }
            
            timeout = setTimeout(() => {
              timeout = null;
            }, 500); 
          }
        }
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      section.removeEventListener("wheel", handleWheel);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12.5 bg-white overflow-hidden text-black">
      <Container>
        <h2 className="text-[40px] md:text-[64px] chakra font-bold mb-8 md:mb-12 uppercase leading-tight">
          OUR WORK
        </h2>

        <div className="recent-work-slider">
          <Slider ref={sliderRef} {...settings}>
            {workData.map((item, index) => (
              <div key={index} className="px-2 md:px-4">
                <div className="w-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eee]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-[2fr_1fr] items-center py-4 mt-4 md:mt-6 border-y border-[#D2D2D2]">
                    <h2 className="text-[18px] md:text-[20px] chakra font-extrabold uppercase truncate">
                      {item.title}
                    </h2>
                    <div className="text-right">
                      <p className="text-[#ADADAD] poppins text-xs md:text-sm">{item.category}</p>
                      <Link href={item.link} className="text-[#10C8F0] poppins text-sm md:text-base font-medium">
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      <style jsx global>{`
        .recent-work-slider .slick-list {
          overflow: visible;
          position: relative;
        }
        @media (min-width: 768px) {
          .recent-work-slider .slick-list::before {
            content: "";
            position: absolute;
            right: 100%;
            width: 200vw;
            height: 100%;
            background: #fff;
            z-index: 10;
            pointer-events: none;
          }
        }
        .recent-work-slider .slick-track { display: flex !important; }
        .recent-work-slider .slick-slide { height: auto; }
        
        /* Ensure the slide content takes full width on mobile */
        @media (max-width: 767px) {
          .recent-work-slider .slick-slide > div {
            width: 100%;
          }
        }

        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
}