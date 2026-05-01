"use client";

import Container from "@/components/Container";
import Image from "next/image";

export default function SeoTestimonial() {
  return (
    <section className="py-17.5 bg-white">
      <Container>
        <div className="bg-[#090F14] text-white p-6 md:p-8 lg:p-10 flex flex-col justify-between relative h-auto lg:h-200">
          <div>
            <h2 className="text-[28px] md:text-[48px] xl:text-[64px] font-bold chakra tracking-[0.32px] leading-[1.6em] lg:leading-[1.8em]">
              "HIGH JUMP DIGITAL HAVE BEEN OUTSTANDING. WE HAVE IMPROVED IN ALL
              AREAS OF SEO FROM ORGANIC RANKING THROUGH TO ORGANIC TRAFFIC AND
              NUMBER OF REFERRING DOMAINS”
            </h2>
          </div>

          {/* BOTTOM RIGHT CONTENT */}
          <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-4 lg:right-12.75 flex flex-col items-start lg:items-end text-left lg:text-right gap-5">
            <Image
              src="/home/testimonial/Google-main.png"
              alt="Testimonial"
              width={100}
              height={60}
              className="object-cover"
            />

            <p className="chakra text-[16px] font-bold">STEPHEN KISS</p>

            <p className="text-[#10C8F0] text-[16px] manrope font-medium leading-normal">
              Managing Director
              <br />
              Plas-Pak Pty Ltd
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
