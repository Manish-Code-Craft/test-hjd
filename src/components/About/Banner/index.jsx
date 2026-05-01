"use client";

import Container from "@/components/Container";

export default function About() {
  return (
    <section className="relative pt-54.5 pb-25 overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home/video/home-banner.mp4" type="video/mp4" />
        </video>

        {/* optional dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <Container className="relative z-10">
        <div className="max-w-310">

          {/* TITLE */}
          <h1 className="text-white text-[40px] sm:text-[60px] lg:text-[80px] font-bold uppercase leading-[1.2em] chakra">
            OUR STORY
          </h1>

          {/* TEXT */}
          <div className="mt-6 space-y-5 text-white text-[14px] md:text-[18px] font-medium leading-[1.8em] manrope">
            <p>
              High Jump Digital is a digital marketing agency dedicated to providing a truly enhanced experience to all other agencies.
            </p>

            <p>
              High Jump Digital’s founders have experience with agencies in both the UK and Australia, identifying and improving upon clients past digital experiences. Whether it was poor quality delivery, impersonal account management or non-transparent work reports.
            </p>

            <p>
              Out of these experiences, High Jump Digital was born.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}