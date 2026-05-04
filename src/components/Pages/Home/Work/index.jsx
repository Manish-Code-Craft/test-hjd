"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/Container";

const workData = [
  {
    title: "Rock Solid Doors",
    category: "SEO",
    image: "/home/work/rock-solid.webp",
    link: "#",
  },
  {
    title: "Reef Group",
    category: "SEO",
    image: "/home/work/reef.webp",
    link: "#",
  },
  {
    title: "Chemdry",
    category: "Facebook",
    image: "/home/work/chemdry.webp",
    link: "#",
  },
  {
    title: "Smart Security",
    category: "SEO",
    image: "/home/work/smart-security.webp",
    link: "#",
  },
  {
    title: "RV Parts Express",
    category: "Adwords",
    image: "/home/work/rv-express.webp",
    link: "#",
  },
];

export default function WorkSlider() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const totalSlides = workData.length;
  const slidesToShow = 3;
  const maxIndex = totalSlides - slidesToShow;

  const handleWheel = (e) => {
    if (!sliderRef.current) return;

    // If still sliding range → prevent page scroll
    if (
      (e.deltaY > 0 && current < maxIndex) ||
      (e.deltaY < 0 && current > 0)
    ) {
      e.preventDefault();

      if (e.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    beforeChange: (_, next) => setCurrent(next),
  };

  return (
    <section className="h-[200vh] bg-white text-black">
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex items-center">
        <Container>
          <h2 className="text-[64px] chakra font-bold mb-12">
            OUR WORK
          </h2>

          <div
            className="recent-work-slider"
            onWheel={handleWheel}
          >
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
                        <p className="text-[#ADADAD] poppins text-md">
                          {item.category}
                        </p>
                        <Link
                          href={item.link}
                          className="text-[#10C8F0] poppins text-lg"
                        >
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
      </div>

      {/* styles */}
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

        .recent-work-slider .slick-track {
          display: flex;
        }

        .recent-work-slider .slick-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}