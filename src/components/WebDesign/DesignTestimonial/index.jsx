"use client";

import Container from "@/components/Container";
import Image from "next/image";

export default function DesignTestimonial() {
  return (
    <section className="py-17.5 bg-white">
      <Container>
        <div className="bg-[#090F14] text-white p-6 md:p-8 lg:p-10 flex flex-col justify-between relative h-auto lg:h-200">
          <div>
            <h2 className="text-[28px] md:text-[48px] xl:text-[64px] font-bold chakra tracking-[0.32px] leading-[1.6em] lg:leading-[1.8em]">
              "THROUGHOUT THE PROCESS OF BUILDING MY SITE, HIGH JUMP HAVE BEEN MORE THAN PATIENT, EXTREMELY HELPFUL AND VERY ACCOMODATING. I AM SUPER HAPPY WITH THE END RESULT.”
            </h2>
          </div>

          {/* BOTTOM RIGHT CONTENT */}
          <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-8 lg:right-12.75 flex flex-col items-start lg:items-end text-left lg:text-right gap-5">
            <p className="chakra text-[16px] font-bold">SUE BRIGGS</p>

            <p className="text-[#10C8F0] text-[16px] manrope font-medium leading-normal">
             Small Biz Books
              <br />
              Business Owner
            </p>
            <Image
              src="/home/testimonial/Google-main.png"
              alt="Testimonial"
              width={100}
              height={60}
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
