"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function OurWorkBanner({ setActiveCategory }) {
  return (
    <section className="bg-[#090F14] pt-41.25 pb-12.5">
      <Container>
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-7.5">
          
          {/* LEFT */}
          <div>
            <h1 className="text-white text-[40px] sm:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
              OUR WORK
            </h1>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-white text-[16px] sm:text-[18px] font-normal leading-[1.8em] poppins">
              At High Jump Digital, we take immense pride in the work we do, and
              the success of our clients is a testament to our dedication and
              expertise.
            </p>
          </div>
        </div>

        {/* FILTER */}
        <div className="mt-10">
          <ul className="flex flex-wrap items-center gap-6">
            
            <li className="text-white text-[14px] sm:text-[16px] font-bold uppercase chakra">
              FILTER BY:
            </li>

            {["ADWORDS", "FACEBOOK", "SEO"].map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(item)}   // ✅ only added
                className="group flex items-center gap-2 text-[#10C8F0] text-[14px] sm:text-[16px] font-bold uppercase chakra cursor-pointer"
              >
                {item}

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}