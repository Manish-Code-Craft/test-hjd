"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Container from "@/components/Container";

const testimonial = [
  {
    text: "WITH HIGHJUMP'S EXPERT STRATEGIES, WE'VE OUTPACED COMPETITION AND DEVELOPED A LEAD GENERATION MACHINE!",
    name: "JOHN CENA",
    role: "Head of Product",
    company: "U Can't C Me Productions",
  },
  {
    text: "HIGHJUMP TRANSFORMED OUR ONLINE PRESENCE, DRIVING UNPRECEDENTED CUSTOMER ENGAGEMENT AND REVENUE",
    name: "Barry Garlo",
    role: "Head of Productr",
    company: "Head of Operations 360 No Scope Agency",
  },
  {
    text: "WE HAVE SCALED OUR BUSINESS FASTER THAN WE COULD HAVE EVER IMAGINED, AND ENTERED NEW LUCRATIVE MARKETS.",
    name: "STE BELL",
    role: "Head of Product",
    company: "Technically Creative  Co.",
  }, 
];

export default function BrandTestimonial() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleArrowClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="py-17.5 bg-white text-white  overflow-hidden">
      <Container>
        <div className="slider-container relative">
          <div className="overflow-hidden border border-white/10 bg-[#090F14]  md:p-8 lg:p-12">
            <Slider ref={sliderRef} {...settings}>
              {testimonial.map((item, index) => (
                <div key={index}>
                  <div className="relative flex flex-col justify-between px-7.5 pt-10 pb-35 md:p-10">
                    <h2 className="text-[24px] chakra sm:text-[40px] lg:text-[50px] xl:text-[64px] mt-5 md:mt-0 h-80 lg:h-160 md:h-150 font-extrabold uppercase leading-[1.8em] tracking-[0.32px] text-white">
                      "{item.text}"
                    </h2>

                    <div className="absolute bottom-0 right-12.75 flex flex-col items-end text-right justify-end gap-3">
                      <Image
                        src="/home/testimonial/Google-main.png"
                        alt="Google"
                        width={100}
                        height={49}
                        className="object-cover"
                      />
                      <p className="uppercase text-white chakra font-bold tracking-[0.32px] text-[16px]">
                        {item.name}
                      </p>
                      <p className="text-[#10C8F0] text-[16px] manrope font-medium leading-normal">
                        {item.role}
                        <br />
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <button
            onClick={handleArrowClick}
            className="review-arrow absolute top-4 right-4 lg:top-6 lg:right-6 z-10 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer lg:p-2"
            aria-label="Next testimonial"
          >
            <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.0421 38.256L38.0461 21.02H0.908094V17.362H38.1081L23.0421 0.125998H27.8161L44.8661 19.16L27.8161 38.256H23.0421Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}