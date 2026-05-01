"use client";

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
    link: "https://www.highjumpdigital.com/our-work/rock-solid-doors/",
  },
  {
    title: "Reef Group",
    category: "SEO",
    image: "/home/work/reef.webp",
    link: "https://www.highjumpdigital.com/our-work/reef-group/",
  },
  {
    title: "Chemdry",
    category: "Facebook",
    image: "/home/work/chemdry.webp",
    link: "https://www.highjumpdigital.com/our-work/chemdry/",
  },
  {
    title: "Smart Security",
    category: "SEO",
    image: "/home/work/smart-security.webp",
    link: "https://www.highjumpdigital.com/our-work/smart-security/",
  },
  {
    title: "RV Parts Express",
    category: "Adwords",
    image: "/home/work/rv-express.webp",
    link: "https://www.highjumpdigital.com/our-work/rv-parts-express/",
  },
];

export default function WorkSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-12.5 bg-white">
      <Container>
 
        <h2 className="text-[64px] chakra font-bold  mb-12">
          OUR WORK
        </h2>

        {/* Slick Slider */}
        <Slider {...settings}>
          {workData.map((item, index) => (
            <div key={index} className="px-0">
              <div className="mr-10">
                {/* Image */}
                <div className="relative h-80 w-full overflow-hidden ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="border-y border-[#D2D2D2] mt-6 py-2.5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[20px] chakra font-extrabold uppercase tracking-[0.02em] text-black">
                      {item.title}
                    </h3>
                    <div className="text-right">
                      <p className="text-[16px] text-[#ADADAD] tracking-[0.32px] font-medium poppins">
                        {item.category}
                      </p>
                      <Link
                        href={item.link}
                        target="_blank"
                        className="mt-3 inline-block text-[18px] manrope tracking-[0.32px] font-medium text-[#10C8F0] hover:text-[#0d8cc7]"
                      >
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </Container>
    </section>
  );
}