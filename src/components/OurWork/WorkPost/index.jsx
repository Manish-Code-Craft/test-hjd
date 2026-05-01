"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import OurWorkBanner from "@/components/OurWork/Banner/index.jsx";

const posts = [
  {
    title: "Rock Solid Doors",
    category: "SEO",
    image: "/home/work/rock-solid.webp",
    href: "/our-work/rock-solid-doors",
  },
  {
    title: "Reef Group",
    category: "SEO",
    image: "/home/work/reef.webp",
    href: "/our-work/reef-group",
  },
  {
    title: "ChemDry",
    category: "Facebook",
    image: "/home/work/chemdry.webp",
    href: "/our-work/chemdry",
  },
  {
    title: "Smart Security",
    category: "SEO",
    image: "/home/work/smart-security.webp",
    href: "/our-work/smart-security",
  },
  {
    title: "RV Parts Express",
    category: "AdWords",
    image: "/home/work/rv-express.webp",
    href: "/our-work/rv-parts-express",
  },
];

export default function WorkPosts() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      {/* Banner (connected here) */}
      <OurWorkBanner setActiveCategory={setActiveCategory} />

      <section className="w-full bg-white py-15">
        <Container>
          
          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts
              .filter((post) =>
                activeCategory
                  ? post.category.toUpperCase() === activeCategory
                  : true
              )
              .map((post, index) => (
                <div key={index} className="group">
                  
                  {/* IMAGE */}
                  <Link href={post.href}>
                    <div className="overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={500}
                        className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="mt-6 border-y border-[#D9D9D9] py-2.5">
                    
                    <div className="flex items-center justify-between">
                      
                      <h2 className="text-black text-[28px] lg:text-[32px] font-extrabold leading-[1.8em] chakra">
                        {post.title}
                      </h2>

                      <div className="text-right">
                        <p className="text-[#A3A3A3] text-[14px] sm:text-[16px] manrope leading-normal m-0 font-medium">
                          {post.category}
                        </p>

                        <Link
                          href={post.href}
                          className="text-[#10C8F0] text-[16px] sm:text-[18px] manrope leading-normal font-medium underline"
                        >
                          Read More
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
          </div>

        </Container>
      </section>
    </>
  );
}