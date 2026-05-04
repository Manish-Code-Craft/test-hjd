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
  const isAtStart = useRef(true);
  const isAtEnd = useRef(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    beforeChange: (oldIdx, newIdx) => {
      // Update boundaries
      isAtStart.current = newIdx === 0;
      isAtEnd.current = newIdx >= workData.length - 3; // 3 is slidesToShow
    },
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { slidesToShow: 2 },
        // Update boundary logic for tablet
        beforeChange: (o, n) => { 
          isAtStart.current = n === 0; 
          isAtEnd.current = n >= workData.length - 2; 
        } 
      },
      { 
        breakpoint: 640, 
        settings: { slidesToShow: 1 },
        // Update boundary logic for mobile
        beforeChange: (o, n) => { 
          isAtStart.current = n === 0; 
          isAtEnd.current = n >= workData.length - 1; 
        } 
      }
    ]
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timeout = null;

    const handleWheel = (e) => {
      if (!sliderRef.current) return;

      const delta = e.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;

      // If we are moving down and NOT at the end, OR moving up and NOT at the start:
      // We lock the page and move the slider.
      if ((scrollingDown && !isAtEnd.current) || (scrollingUp && !isAtStart.current)) {
        if (Math.abs(delta) > 10) { // Ignore tiny jitter
          e.preventDefault();
          
          if (!timeout) {
            if (scrollingDown) {
              sliderRef.current.slickNext();
            } else {
              sliderRef.current.slickPrev();
            }
            
            // Limit how fast the user can trigger slides
            timeout = setTimeout(() => {
              timeout = null;
            }, 500); 
          }
        }
      }
    };

    // Attach with passive: false to ensure preventDefault works
    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      section.removeEventListener("wheel", handleWheel);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12.5 bg-white overflow-hidden text-black">
      <Container>
        <h2 className="text-[64px] chakra font-bold mb-12 uppercase">
          OUR WORK
        </h2>

        <div className="recent-work-slider">
          <Slider ref={sliderRef} {...settings}>
            {workData.map((item, index) => (
              <div key={index} className="px-4">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eee]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-[2fr_1fr] items-center py-4 mt-6 border-y border-[#D2D2D2]">
                    <h2 className="text-[20px] chakra font-extrabold uppercase">
                      {item.title}
                    </h2>
                    <div className="text-right">
                      <p className="text-[#ADADAD] poppins text-md">{item.category}</p>
                      <Link href={item.link} className="text-[#10C8F0] poppins text-lg">
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
        .recent-work-slider .slick-track { display: flex; }
        .recent-work-slider .slick-slide { height: auto; }
        
        /* Stop horizontal scrollbars from appearing */
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
    </section>
  );
}