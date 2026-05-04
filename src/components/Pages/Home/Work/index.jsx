"use client";

import React, { useRef, useEffect, useState } from "react";
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
  
  // Track boundaries for wheel logic
  const isAtStart = useRef(true);
  const isAtEnd = useRef(false);
  
  // State to handle screen-size specific logic cleanly
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Update slidesToShow on mount and resize
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Scroll Hijacking Logic
    const section = sectionRef.current;
    let timeout = null;

    const handleWheel = (e) => {
      // Only hijack on desktop (1024px+)
      if (window.innerWidth < 1024 || !sliderRef.current) return;

      const delta = e.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;

      // Only prevent page scroll if we can actually move the slider
      if ((scrollingDown && !isAtEnd.current) || (scrollingUp && !isAtStart.current)) {
        e.preventDefault();
        
        if (!timeout) {
          if (scrollingDown) sliderRef.current.slickNext();
          else sliderRef.current.slickPrev();
          
          timeout = setTimeout(() => { timeout = null; }, 600);
        }
      }
    };

    section?.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      section?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    beforeChange: (oldIdx, newIdx) => {
      isAtStart.current = newIdx === 0;
      isAtEnd.current = newIdx >= workData.length - slidesToShow;
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-12.5 bg-white overflow-hidden text-black min-h-[500px]"
    >
      
      {isMounted && (
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
                        priority={index < 3}
                      />
                    </div>

                    <div className="grid grid-cols-[2fr_1fr] items-center py-4 mt-4 md:mt-6 border-y border-[#D2D2D2]">
                      <h2 className="text-[18px] md:text-[20px] chakra font-extrabold uppercase truncate pr-2">
                        {item.title}
                      </h2>
                      <div className="text-right flex flex-col justify-center">
                        <p className="text-[#ADADAD] poppins text-xs md:text-sm">{item.category}</p>
                        <Link href={item.link} className="text-[#10C8F0] poppins text-sm md:text-base font-medium whitespace-nowrap">
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
      )}

      <style jsx global>{`
        /* Desktop: The "cut-off" look */
        @media (min-width: 1024px) {
          .recent-work-slider .slick-list {
            overflow: visible !important;
          }
          /* This masks the slides that bleed to the LEFT */
          .recent-work-slider .slick-list::before {
            content: "";
            position: absolute;
            right: 100%;
            width: 100vw;
            height: 100%;
            background: #fff;
            z-index: 10;
            pointer-events: none;
          }
        }

        /* Mobile/Tablet: Standard slider behavior to prevent squishing */
        @media (max-width: 1023px) {
          .recent-work-slider .slick-list {
            overflow: hidden !important;
          }
        }

        /* Cleanup standard Slick styles that often cause layout shifts */
        .recent-work-slider .slick-track {
          display: flex !important;
          margin-left: 0;
        }
        .recent-work-slider .slick-slide {
          height: inherit !important;
        }
        .recent-work-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}